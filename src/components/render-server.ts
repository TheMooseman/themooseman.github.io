import REGL, { Vec4 } from "regl";
import { Vec2 } from "regl";

export class RenderServer {
    regl;
    cnvs: HTMLCanvasElement;
    mousePos: Vec2 | undefined;
    bgColor: Vec4 | undefined;
    positions: Vec2[];
    pointSizes: number[];

    constructor(
        cnvs: HTMLCanvasElement,
        positions: Vec2[],
        pointSizes: number[],
        bgColor?: Vec4
    ) {
        this.cnvs = cnvs;
        this.regl = REGL({ canvas: this.cnvs });
        this.bgColor = bgColor;
        this.positions = positions;
        this.pointSizes = pointSizes;
        this.draw();
    }

    updateMouse(posInSceenSpace: Vec2 | undefined) {
        this.mousePos = posInSceenSpace;
    }

    updatePoints(points: Vec2[]) {
        this.positions = points;
    }

    updatePointSizes(sizes: number[]) {
        this.pointSizes = sizes;
    }

    draw() {
        this.clear();
        const uniforms = {
            size: ({ time }: REGL.DefaultContext) => {
                return time % 1;
            },
            mousePos: this.mousePos ?? [0.0, 0.0],
        };
        this.regl({
            frag: /*glsl*/ `
            precision mediump float;

            void main() {
                gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            }
            `,
            vert: /*glsl*/ `
            precision mediump float;
            attribute vec2 position;
            attribute float pointWidth;

            void main() {
                gl_PointSize = pointWidth;
                gl_Position = vec4(position, 0.0, 1.0);
            }
            `,
            attributes: {
                position: this.positions.map((v) => v),
                pointWidth: () => this.pointSizes,
            },
            uniforms,
            count: this.positions.length,
            primitive: "points",
        })();
    }

    clear() {
        this.regl.clear({ color: this.bgColor ?? [0, 0, 0, 1] });
    }

    beginRendering() {
        const loop = this.regl.frame(() => {
            try {
                this.regl.clear({ color: this.bgColor ?? [0, 0, 0, 1] });
                this.draw();
            } catch (error) {
                loop.cancel();
                throw error;
            }
        });
    }
}
