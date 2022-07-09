import { toRadians } from "./ConvertMS"

export const t3Grid2DUnitToPixel = (t3Camera) => {
    const cameraViewHeight = t3Camera.getPosition().z;
    const verticalFovInRadians = toRadians(t3Camera.fov.ver)
    const verticalViewInPixels = t3Camera.obs.height;
    return verticalViewInPixels / (cameraViewHeight * 2) / Math.tan(verticalFovInRadians / 2);
} 