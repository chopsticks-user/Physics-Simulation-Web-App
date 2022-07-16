import * as THREE from "three"

class Camera2D {
    constructor(spaceWidth, spaceHeight, near = 0.1, far = 1000, fov = 91, 
        aspectRatioLimit = 2.3, defaultViewHeight = 4, scaleResetLimit = 2) {

        this.obs = {width: spaceWidth, height: spaceHeight, near: near, far: far};
        this.aspectRatio = spaceWidth / spaceHeight;
        this.aspectRatioLimit = aspectRatioLimit;
        this.fov = {hor: fov * this.aspectRatio, ver: fov};
        this.t3Component = new THREE.PerspectiveCamera(
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
        this.viewAttr = {default: dhv, min: dhv / 3, max: dhv * 2};
        this.setPositionZ(dhv);
    }

    updateViewAttr = () => {
        const position = this.getPosition();
        if (this.viewHeightWillBeReset()) {
                // this.currentScale *= position.z / this.viewAttr.default
                // this.setPositionZ(this.viewAttr.default);
                this.setPositionZ(position.z >= this.viewAttr.default ? this.viewAttr.max : this.viewAttr.min);
                return true;
            }
        return false;
    }

    viewHeightWillBeReset = () => {
        return (
            this.t3Component.position.y > this.viewAttr.max || 
            this.t3Component.position.y < this.viewAttr.min
        );
    }

    getPosition = () => {
        return {
            x: this.t3Component.position.x, 
            y: -this.t3Component.position.z, 
            z: this.t3Component.position.y
        }
    }

    setPosition = (x, y, z) => {
        this.t3Component.position.set(x, -z, y);
    }

    setPositionX = (x) => {
        this.t3Component.position.x = x;
    }

    setPositionY = (y) => {
        this.t3Component.position.z = -y;
    }

    setPositionZ = (z) => {
        this.t3Component.position.y = z;
    }
}

export { Camera2D };
