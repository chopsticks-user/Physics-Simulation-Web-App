import Module from './api_example.js'
import Neko2D from './init.mjs';

const module = await Module();
((state) => {
    var state = state || {};
    state.vector = class {
        constructor() {
            return module["returnVectorData"]();
        }
    }
    state.map = class {
        constructor() {
            return module["returnMapData"]();
        }
    }
    state.myClass = class {
        constructor(x, y) {
            return new module["MyClass"](x, y);
        }
    }
    return state;
})(Neko2D || {});

export default Neko2D;
