import React, {
    useRef,
    useEffect,
    useState,
    useCallback,
    useMemo,
} from "react";
import { RenderServer } from "../render-server";
import { Box, Stack, useTheme } from "@mui/material";
import { Vec2, Vec4 } from "regl";
import { vec2 } from "../../utils/math";

interface ProfessionsViewerProps {
    points: Vec2[];
    lines: Vec2[];
    divScale: number;
    axes: [Vec2, Vec2];
    children?: JSX.Element;
}

const size = [700, 600];

function hexToVec4(hexColor: string, opacity = 1): Vec4 {
    let parsed = hexColor.replace("#", "");
    if (parsed.length === 3) {
        parsed = parsed
            .split("")
            .map((char) => char + char)
            .join("");
    }

    const r = parseInt(parsed.substring(0, 2), 16) / 255;
    const g = parseInt(parsed.substring(2, 4), 16) / 255;
    const b = parseInt(parsed.substring(4, 6), 16) / 255;

    return [r, g, b, opacity];
}

export function ProfessionsViewer({
    points,
    lines,
    divScale,
    children,
}: ProfessionsViewerProps) {
    const theme = useTheme();
    const cnvs = useRef<HTMLCanvasElement>(null);
    const renderServer = useRef<RenderServer>();
    const div = useRef<HTMLDivElement | null>(null);
    const [pointScale, setPointScale] = useState(1.0);
    const [pointOffs, setPointOffs] = useState<Vec2>([0, 0]);
    const [dragging, setDragging] = useState(false);
    const [start, setStart] = useState<Vec2 | undefined>();

    useEffect(() => {
        if (cnvs?.current) {
            const reducedPoints: Record<string, number> = {};
            points?.forEach(([i, j]) => {
                const hash = `${i},${j}`;
                if (reducedPoints[hash]) {
                    reducedPoints[hash] += 1;
                } else {
                    reducedPoints[hash] = 1;
                }
            });
            const sizes = points?.map(([i, j]) => {
                return reducedPoints[`${i},${j}`];
            });

            const bgColor = hexToVec4(theme.palette.background.default);
            renderServer.current = new RenderServer(
                cnvs.current,
                points,
                sizes,
                bgColor
            );
        }
        // only want to run this at the beginning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cnvs]);

    useEffect(() => {
        const reducedPoints: Record<string, number> = {};
        points?.forEach(([i, j]) => {
            const hash = `${i},${j}`;
            if (reducedPoints[hash]) {
                reducedPoints[hash] += 1;
            } else {
                reducedPoints[hash] = 1;
            }
        });
        const sizes = points?.map(([i, j]) => {
            return reducedPoints[`${i},${j}`];
        });
        if (renderServer?.current) {
            console.log(divScale);
            renderServer.current.updatePointSizes(sizes);
            renderServer.current.updateLines(lines);

            renderServer.current.draw();
        }
    }, [divScale, lines, points, renderServer]);

    const scaledPoints = useMemo(
        () => points.map((v) => vec2.sub(vec2.scale(v, pointScale), pointOffs)),
        [pointOffs, pointScale, points]
    );

    const scaledLines = useMemo(
        () => lines.map((v) => vec2.sub(vec2.scale(v, pointScale), pointOffs)),
        [lines, pointOffs, pointScale]
    );

    const handleMouseMove = (e?: React.MouseEvent<HTMLCanvasElement>) => {
        if (renderServer.current && e) {
            renderServer.current.updateMouse([e.movementX, e.movementY]);
        } else {
            renderServer.current?.updateMouse(undefined);
            setDragging(false);
            setStart(undefined);
        }
    };

    const zoom = useCallback((e: React.WheelEvent<HTMLCanvasElement>) => {
        const scale = e.deltaY < 0 ? 1.1 : 0.9;
        setPointScale((prev) => prev * scale);
    }, []);

    const pan = useCallback(
        (e: React.MouseEvent<HTMLCanvasElement>) => {
            if (dragging && start) {
                const samePos = vec2.isEqual([e.clientX, e.clientY], start);
                if (!samePos) {
                    const amt: Vec2 = vec2.sub([e.clientX, e.clientY], start);
                    // scale to view size and invert x
                    const scaledAmt = vec2.mul(
                        [-1, 1],
                        vec2.div(amt, [size[0], size[1]])
                    );
                    setPointOffs((prev) => vec2.add(prev, scaledAmt));
                    setStart([e.clientX, e.clientY]);
                }
            }
        },
        [dragging, start]
    );

    useEffect(() => {
        if (renderServer.current) {
            renderServer.current.updatePoints(scaledPoints);
            renderServer.current.updateLines(scaledLines);

            renderServer.current.draw();
        }
    }, [pointOffs, pointScale, scaledLines, scaledPoints]);

    return (
        <Box
            width={size[0]}
            height={size[1]}
            paddingTop={1}
            paddingLeft={1}
            position="relative"
        >
            <canvas
                ref={cnvs}
                width={size[0]}
                height={size[1]}
                style={{ background: theme.palette.background.default }}
                onMouseMove={pan}
                onMouseDown={(e) => {
                    setDragging(true);
                    setStart([e.clientX, e.clientY]);
                }}
                onMouseUp={() => {
                    setDragging(false);
                    setStart(undefined);
                }}
                onMouseLeave={() => handleMouseMove()}
                onWheel={zoom}
            />
            <div ref={div} style={{ position: "absolute", left: 0, top: 0 }} />
            <Stack
                direction="row"
                alignSelf="flex-start"
                bgcolor="transparent"
                position="absolute"
                top={0}
                left={0}
                paddingTop={2}
            >
                {children}
            </Stack>
        </Box>
    );
}
