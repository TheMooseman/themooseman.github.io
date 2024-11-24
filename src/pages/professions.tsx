import Stack from "@mui/material/Stack";
import { ProfessionsViewer } from "../components/complex/professions-viewer";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Skeleton,
    Slider,
    Typography,
} from "@mui/material";
import { splitColsRows } from "../utils/parseCsv";
// @ts-expect-error importing a csv to use
import careerData from "../assets/career-data.csv";
import { useCsv } from "../hooks/use-csv";
import { useEffect, useMemo, useState } from "react";
import { Vec2 } from "regl";

type Filter = {
    name: string;
    options: Record<string | number, number>;
    type: "text" | "numeric";
    range?: Vec2;
};

interface DropdownItemProps {
    filter: Filter;
    onChange?: (v: string | number[]) => void;
}

function getRange(filter: Filter) {
    let [min, max] = [Infinity, -Infinity];
    if (filter.type === "numeric") {
        Object.keys(filter.options).forEach((v) => {
            const num = Number(v);
            min = Math.min(num, min);
            max = Math.max(num, max);
        });
    }
    return [min, max];
}

function DropdownItem({ filter, onChange }: DropdownItemProps) {
    const [range, setRange] = useState<number[]>(getRange(filter));

    useEffect(() => {
        if (filter.type === "numeric") {
            let [min, max] = [Infinity, -Infinity];
            Object.keys(filter.options).forEach((v) => {
                const num = Number(v);
                min = Math.min(num, min);
                max = Math.max(num, max);
            });
            setRange([min, max]);
        }
    }, [filter]);

    return (
        <FormControl variant="standard" fullWidth>
            {filter.type === "text" ? (
                <>
                    <InputLabel id={filter.name}>{filter.name}</InputLabel>
                    <Select
                        labelId={filter.name}
                        id={filter.name}
                        label={filter.name}
                        defaultValue={""}
                        size="small"
                        onChange={(e) => {
                            onChange?.(e.target.value as string);
                        }}
                    >
                        {Object.entries(filter.options).map((v) => (
                            <MenuItem key={v[0]} value={v[0]}>
                                {v[0]}
                            </MenuItem>
                        ))}
                    </Select>
                </>
            ) : (
                <>
                    <InputLabel id={filter.name}>{filter.name}</InputLabel>
                    <Slider
                        onChange={(_, v) => {
                            onChange?.(v as number[]);
                        }}
                        valueLabelDisplay="auto"
                        min={range[0]}
                        max={range[1]}
                        defaultValue={[range[0], range[1]]}
                        disableSwap
                    />
                </>
            )}
        </FormControl>
    );
}

export function Professions() {
    const [axes, setAxes] = useState<[string, string]>([
        "Age",
        "Years of Experience",
    ]);
    const [filterItems, setFilterItems] = useState<
        Record<string, string | number[]>
    >({});
    const { data, loading } = useCsv(careerData);

    const { cols, entries } = useMemo(() => splitColsRows(data), [data]);
    const filters = useMemo(() => {
        if (data && !loading) {
            const newFilters: Filter[] = cols.map((v) => ({
                name: v,
                options: {},
                type: "text",
            }));

            // determine col input type
            entries[0].forEach((v, i) => {
                if (isNaN(Number(v))) {
                    console.log("test");
                    newFilters[i].type = "text";
                } else {
                    newFilters[i].type = "numeric";
                }
            });

            const rangeMap: Record<string, Vec2> = {};
            // load all the entries into options
            entries.forEach((v) => {
                v.forEach((r, i) => {
                    if (r) {
                        const prev = newFilters[i].options[r];
                        newFilters[i].options[r] = prev ? prev + 1 : 1;

                        const num = Number(r);
                        if (!isNaN(num)) {
                            if (!rangeMap[newFilters[i].name])
                                rangeMap[newFilters[i].name] = [
                                    Infinity,
                                    -Infinity,
                                ];
                            const [min, max] = rangeMap[newFilters[i].name];
                            const newMin = Math.min(num, min);
                            const newMax = Math.max(num, max);
                            rangeMap[newFilters[i].name] = [newMin, newMax];
                        }
                    }
                });
            });

            Object.entries(rangeMap).forEach(([, v], i) => {
                newFilters[i].range = v;
            });

            return newFilters;
        }
        return [];
    }, [cols, data, entries, loading]);

    const points: Vec2[] = useMemo(() => {
        let [xMin, xMax] = [Infinity, -Infinity];
        let [yMin, yMax] = [Infinity, -Infinity];
        entries.forEach((v) => {
            // get range according to axis
            v.forEach((r, i) => {
                const col = filters[i];
                if (col?.name === axes[0]) {
                    xMin = Math.min(Number(r), xMin);
                    xMax = Math.max(Number(r), xMax);
                } else if (col?.name === axes[1]) {
                    yMin = Math.min(Number(r), yMin);
                    yMax = Math.max(Number(r), yMax);
                }
            });
        });

        // we can do the filtering here until we think of a better way
        const newPoints = entries
            .filter((v) => {
                if (Object.entries(filterItems).length === 0) return true;
                const isThere: boolean[] = cols.map(() => false);
                cols.forEach((col, j) => {
                    const filterVal = filterItems[col];

                    if (filterVal !== undefined) {
                        const val = v[j];
                        const num = Number(val);
                        const isNum = !isNaN(num);
                        if (isNum && typeof filterVal !== "string") {
                            const isBetween =
                                num > filterVal[0] && num < filterVal[1];
                            if (isBetween) {
                                isThere[j] = true;
                            }
                        } else if (filterVal === val) {
                            isThere[j] = true;
                        }
                    } else {
                        isThere[j] = true;
                    }
                });

                return isThere.every((v) => v);
            })
            .map((v) => {
                let [x, y] = [0, 0];

                v.forEach((r, i) => {
                    const col = filters[i];
                    if (col?.name === axes[0]) {
                        x = Number(r);
                    } else if (col?.name === axes[1]) {
                        y = Number(r);
                    }
                });

                const scaledX = x / xMax;
                const scaledY = y / yMax;
                // center on the gl canvas
                return [scaledX - 0.5, scaledY - 0.5] as Vec2;
            });

        // console.log(newPoints.length);

        return newPoints ?? [];
    }, [axes, cols, entries, filterItems, filters]);

    const addFilterItem = (item: string, v: string | number[]) => {
        setFilterItems((prev) => ({ ...prev, [item]: v }));
    };

    return (
        <Stack direction="row" width="100%" height="100%">
            {loading ? (
                <>
                    <Skeleton width={250} height={50} />
                    <Skeleton width={600} height={450} />
                </>
            ) : (
                <>
                    <Stack
                        paddingX={2}
                        width="20%"
                        height="90%"
                        spacing={2}
                        overflow="auto"
                        direction="column"
                        alignItems="center"
                    >
                        {filters.map((f) => (
                            <DropdownItem
                                key={f.name}
                                filter={f}
                                onChange={(v) => addFilterItem(f.name, v)}
                            />
                        ))}
                    </Stack>
                    <Stack direction="row" paddingLeft={2} spacing={2}>
                        <Stack direction="column" width={100}>
                            <Typography>X Axis</Typography>
                            <FormControl>
                                <Select
                                    labelId={`x-axis`}
                                    defaultValue={""}
                                    onChange={(e) =>
                                        setAxes((prev) => [
                                            prev[0],
                                            e.target.value as string,
                                        ])
                                    }
                                >
                                    {filters
                                        .filter((f) => f.type === "numeric")
                                        .map((f) => (
                                            <MenuItem value={f.name}>
                                                {f.name}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack direction="column" width={100}>
                            <Typography>Y Axis</Typography>
                            <FormControl>
                                <Select
                                    labelId={`y-axis`}
                                    defaultValue={""}
                                    onChange={(e) =>
                                        setAxes((prev) => [
                                            prev[0],
                                            e.target.value as string,
                                        ])
                                    }
                                >
                                    {filters
                                        .filter((f) => f.type === "numeric")
                                        .map((f) => (
                                            <MenuItem value={f.name}>
                                                {f.name}
                                            </MenuItem>
                                        ))}
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <ProfessionsViewer points={points} />
                </>
            )}
        </Stack>
    );
}
