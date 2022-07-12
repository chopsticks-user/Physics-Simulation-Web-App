// var factory = require('./api_example.js');

// factory().then((instance) => {
//   instance._sayHi(); // direct calling works
//   instance.ccall("sayHi"); // using ccall etc. also work
//   console.log(instance._daysInWeek()); // values can be returned, etc.
// });

import Module from './api_example.js';
import { performance } from "perf_hooks"

// const module = async () => {
//     await Module();
//     return Module();
// };
let ts = performance.now();
const module = await Module();

var Neko2D = (function (state) {
    var state = state || {};
    state.sum = () => module["sum"]();
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

console.log(`Cpp to Js: ${performance.now() - ts} ms`);

export default Neko2D;
