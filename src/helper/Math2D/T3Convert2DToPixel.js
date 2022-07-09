import { toRadians } from "./ConvertMS"

export const t3Grid2DUnitToPixel = (t3Camera) => {
    return t3Camera.obs.height / (t3Camera.obs * 2) / Math.tan(toRadians(t3Camera.fov.ver) / 2);
} 