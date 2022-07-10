import * as t3 from "three"

class Grid2D {
    constructor(width = 3141622, height = 3141622, axesColor = "red", lineColor = "#888888") {
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
}

export default Grid2D;
