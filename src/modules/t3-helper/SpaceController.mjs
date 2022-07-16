import { Camera2D } from "./Camera.mjs"
import { Renderer2D } from "./Renderer.mjs"
import { Grid2D } from "./Grid.mjs"
import { Orbit2D } from "./Orbit.mjs"
import { toRadians } from "../neko-2d/ultis/Convert.js"

class Space2DController {
    constructor(parentDomElement) {
        if (Space2DController.instance) {
            console.log("controller");
            return Space2DController.instance;
        }
        Space2DController.instance = this;

        this.parameters = {
            width: parentDomElement.clientWidth,
            height: parentDomElement.clientHeight
        }

        this.camera = new Camera2D(this.parameters.width, this.parameters.height);
        this.renderer = new Renderer2D(this.parameters.width, this.parameters.height);
        this.renderer.t3Component.domElement.id = "space";
        this.grid = new Grid2D();
        this.orbit = new Orbit2D(this.camera, this.renderer);
        this.orbit.t3Component.update();

        parentDomElement.appendChild(this.renderer.t3Component.domElement);
        this.setAnimation(this.animation);
        return Space2DController.instance;
    }

    render = () => {
        this.renderer.render(this.grid.t3Scene, this.camera.t3Component);
    }

    animation = () => {
        if (this.camera.updateViewAttr()) {
            this.orbit.t3Component.target.z = this.camera.t3Component.position.z;
        }
        this.render();
    }

    setAnimation = (animation) => {
        this.renderer.setAnimation(animation);
    }

    getPosition = () => {
        return this.camera.getPosition();
    }

    getGridSize = () => {
        const cameraViewHeight = this.gridSizeWillBeReset() ? this.camera.viewAttr.default
            : this.camera.getPosition().z;
        const verticalFovInRadians = toRadians(this.camera.fov.ver)
        const verticalViewInPixels = this.camera.obs.height;
        return 1 + verticalViewInPixels / (cameraViewHeight * 2 * Math.tan(verticalFovInRadians / 2));
    }

    getMeasureAttr = () => {
        if (this.gridSizeWillBeReset()) {
            return {
                scale: this.camera.currentScale * (this.camera.getPosition().z >= this.camera.viewAttr.default ? 2 : .5), 
                // scale: this.camera.currentScale * this.getPosition().z
                //     / this.camera.viewAttr.default,
                unit: "m"
            }
        }
        return { scale: this.camera.currentScale, unit: "m" };
    }

    gridSizeWillBeReset = () => {
        return this.camera.viewHeightWillBeReset();
    }
    
    displayGrid(display) {
        this.grid.t3Component.visible = display;
    }
}

export { Space2DController };