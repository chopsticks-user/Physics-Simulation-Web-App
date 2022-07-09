import * as t3 from "three"

export class Camera2D {
    constructor(spaceWidth, spaceHeight, near = 0.1, far = 1000, fov = 91, 
        aspectRatioLimit = 2.3, defaultViewHeight = 6, scaleResetLimit = 2) {

        this.obs = {width: spaceWidth, height: spaceHeight, near: near, far: far};
        this.aspectRatio = spaceWidth / spaceHeight;
        this.aspectRatioLimit = aspectRatioLimit;
        this.fov = {hor: fov * this.aspectRatio, ver: fov};
        this.t3Component = new t3.PerspectiveCamera(
            this.fov.ver, 
            this.aspectRatio, 
            near, 
            far
        );
        let dhv = defaultViewHeight;
        if (this.aspectRatio >= this.aspectRatioLimit) {
            dhv *= 2;
        }
        this.currentScale = 1;
        this.scaleResetLimit = scaleResetLimit;
        this.viewHeight = {default: dhv, min: dhv / 2, max: dhv * 2};
        this.t3Component.position.y = this.viewHeight.max;
    }

    updateViewHeight = () => {
        if (this.t3Component.position.y > this.viewHeight.max
            || this.t3Component.position.y < this.viewHeight.min) {
                this.currentScale *= this.t3Component.position.y / this.viewHeight.default
                this.t3Component.position.y = this.viewHeight.default;
                return true;
            }
        return false;
    }
}