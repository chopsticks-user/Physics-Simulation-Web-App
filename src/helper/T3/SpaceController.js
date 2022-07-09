import Camera2D from "./Camera"
import Renderer2D from "./Renderer"
import Grid2D from "./Grid"
import Orbit2D from "./Orbit"

class Space2DController {
    constructor(parentDomElement) {
        this.width = parentDomElement.clientWidth;
        this.height = parentDomElement.clientHeight;
        this.camera = new Camera2D(this.width, this.height);
        this.renderer = new Renderer2D(this.width, this.height);
        this.grid = new Grid2D();
        this.orbit = new Orbit2D(this.camera, this.renderer);
        parentDomElement.appendChild(this.renderer.t3Component.domElement);
        this.renderer.t3Component.setAnimationLoop(this.animation);
    }

    getPosition = () => {
        return this.camera.getPosition();
    }

    render = () => {
        this.renderer.t3Component.render(this.grid.t3Scene, this.camera.t3Component);
    }

    animation = () => {
        if (this.camera.updateViewAttr()) {
            this.orbit.t3Component.target.z = this.camera.t3Component.position.z;
        }
        this.render();
    }
}

export default Space2DController;