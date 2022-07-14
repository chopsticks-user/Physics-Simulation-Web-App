import Neko2D from "../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.Property = class {
        constructor({
            rx = 0, ry = 0, 
            vx = 0, vy = 0, 
            ax = 0, ay = 0, 
            mass = 0, 

        }) {
            this.position = {x: rx, y: ry};
            this.velocity = {x: vx, y: vy};
            this.acceleration = {x: ax, y: ay};
            this.mass = mass;
        };
        

    }
    return module;
})(Neko2D || {});

export default Neko2D;