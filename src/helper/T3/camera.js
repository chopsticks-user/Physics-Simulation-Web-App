import * as t3 from "three"

export class Camera2D {
    constructor(targetWidth, targetHeight, near = 0.1, far = 1000, fov = 91, 
        aspectRatioLimit = 2.3, initViewHeight = 12, scaleLimit = 2) {

        this.aspectRatio = targetWidth / targetHeight;
        this.aspectRatioLimit = aspectRatioLimit;
        this.fov = {hor: fov * this.aspectRatio, ver: fov};
        this.t3Attr = new t3.PerspectiveCamera(
            this.fov.ver, 
            this.aspectRatio, 
            near, 
            far
        );
        if (this.aspectRatio >= this.aspectRatioLimit) {
            initViewHeight *= 2;
        }
        this.scaleLimit = scaleLimit;
        this.viewHeight = {init: initViewHeight, min: initViewHeight / 3, max: initViewHeight};
        this.t3Attr.position.y = initViewHeight;
    }

    updateViewHeight = () => {
        if (this.t3Attr.position.y >= this.viewHeight.max 
            || this.t3Attr.position.y <= this.viewHeight.min) {
                this.t3Attr.position.y = this.viewHeight.init;
                return true;
            }
        return false;
    }
}