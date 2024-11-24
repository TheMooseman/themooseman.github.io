import { Vec2 } from "regl";

export const vec2 = {
    add: (a: Vec2, b: Vec2) => [a[0] + b[0], a[1] + b[1]] as Vec2,
    sub: (a: Vec2, b: Vec2) => [a[0] - b[0], a[1] - b[1]] as Vec2,
    mul: (a: Vec2, b: Vec2) => [a[0] * b[0], a[1] * b[1]] as Vec2,
    div: (a: Vec2, b: Vec2) => [a[0] / b[0], a[1] / b[1]] as Vec2,
    scale: (a: Vec2, scale: number) => [a[0] * scale, a[1] * scale] as Vec2,
    isEqual: (a: Vec2, b: Vec2) => a[0] === b[0] && a[1] === b[1],
};

export function isVec2(a: number[]) {
    if (a[0] && a[1]) return true;
    return false;
}
