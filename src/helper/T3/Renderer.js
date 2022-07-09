import * as t3 from "three"

export class Renderer2D {
    constructor(targetWidth, targetHeight) {
        this.t3Component = new t3.WebGLRenderer().setSize(targetWidth, targetHeight);
        this.canvas = this.t3Component.domElement; 
    }
}