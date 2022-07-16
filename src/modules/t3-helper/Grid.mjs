import * as THREE from "three"

class Grid2D {
    constructor(width = 314162, height = 314162, axesColor = "red", lineColor = "#888888") {
        this.size = {width: width, height: height};
        this.axesColor = axesColor;
        this.lineColor = lineColor;
        this.t3Component = new THREE.GridHelper(width, height, axesColor, lineColor);
        this.t3Scene = new THREE.Scene().add(
            new THREE.Mesh(
                new THREE.PlaneGeometry(width, height), 
                new THREE.MeshBasicMaterial({
                    side: THREE.DoubleSide, 
                    visible: false
                })
            ), 
            this.t3Component, 
        );
    }
}

export { Grid2D };
