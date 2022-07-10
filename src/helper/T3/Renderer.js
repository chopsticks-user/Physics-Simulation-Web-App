import * as t3 from "three"

class Renderer2D {
    constructor(targetWidth, targetHeight) {
        this.t3Component = new t3.WebGLRenderer();
        this.t3Component.setSize(targetWidth, targetHeight);
    }

    render = (...args) => {
        this.t3Component.render(...args);
    }

    setAnimation = (animation) => {
        this.t3Component.setAnimationLoop(animation);
    }
}

export default Renderer2D;