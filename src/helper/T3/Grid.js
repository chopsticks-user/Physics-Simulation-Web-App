import * as t3 from "three"
import { t3Grid2DUnitToPixel } from "../Math2D/T3Convert2DToPixel";

class Grid2D {
    constructor(width = 31416, height = 31416, axesColor = "red", lineColor = "#888888") {
        this.size = {width: width, height: height};
        this.axesColor = axesColor;
        this.lineColor = lineColor;
        this.t3Component = new t3.GridHelper(width, height, axesColor, lineColor);
        this.t3Scene = new t3.Scene().add(
            new t3.Mesh(
                new t3.PlaneGeometry(width, height), 
                new t3.MeshBasicMaterial({
                    side: t3.DoubleSide, 
                    visible: false
                })
            ), 
            this.t3Component
        );
    }
    getUnitSizeToPixel = (Camera2D) => {
        return t3Grid2DUnitToPixel(Camera2D);
    }
}

export default Grid2D;
