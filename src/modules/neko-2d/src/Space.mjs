import Neko2D from "../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.Space = class {
        constructor(oX = 0, oY = 0) {
            this.view = {x: oX, y: oY};
            this.lastTransform = {x: 0, y: 0};
            this.scale = 1;
            this.objects = [];
        };
        updateScale = (newScale) => {
            this.scale = newScale;
        }
        transform = (tX, tY) => {
            this.lastTransform.x = tX * this.scale;
            this.lastTransform.y = tY * this.scale;
            this.view.x += this.lastTransform.x;
            this.view.y += this.lastTransform.y;
        };
    }
    return module;
})(Neko2D || {});

export default Neko2D;