import { OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export class Orbit2D {
    constructor(camera2D, renderer2D, enableRotate = false) {
        this.t3Component = new OrbitControls(
            camera2D.t3Component, 
            renderer2D.t3Component.domElement
        );
        this.t3Component.enableRotate = enableRotate;
        this.t3Component.update();
    }
}