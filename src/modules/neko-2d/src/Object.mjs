import Neko2D from "../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.Object = class {
        constructor(property) {
            this.property = property;
        };
        

    }
    return module;
})(Neko2D || {});

export default Neko2D;