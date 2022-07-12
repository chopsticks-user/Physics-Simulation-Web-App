import Module from "./api1.js"
import Neko2D from './init.mjs';

const module = await Module();

((state) => {
    
    var state = state || {};
    state.sum = () => module["sum"]();
    return state;
})(Neko2D || {});

export default Neko2D;
