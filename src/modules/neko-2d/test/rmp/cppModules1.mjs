import Module from "./api1.js"
import { performance } from "perf_hooks"
import Neko2D from './index.mjs';

const module = await Module();

((state) => {
    
    var state = state || {};
    state.sum = () => module["sum"]();
    return state;
})(Neko2D || {});

export default Neko2D;
