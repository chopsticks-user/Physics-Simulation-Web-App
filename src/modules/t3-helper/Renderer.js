import * as t3 from "three"

class Renderer2D {
    constructor(targetWidth, targetHeight) {
        this.t3Component = new t3.WebGLRenderer();
        this.t3Component.setSize(targetWidth, targetHeight);
    }

    render = (scence, ...args) => {
        this.t3Component.render(scence, ...args);
    }

    setAnimation = (animation) => {
        this.t3Component.setAnimationLoop(animation);
    }
}

export { Renderer2D };