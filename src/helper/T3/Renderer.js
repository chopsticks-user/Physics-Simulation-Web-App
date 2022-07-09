import * as t3 from "three"

class Renderer2D {
    constructor(targetWidth, targetHeight) {
        this.t3Component = new t3.WebGLRenderer();
        this.t3Component.setSize(targetWidth, targetHeight);
    }
}

export default Renderer2D;