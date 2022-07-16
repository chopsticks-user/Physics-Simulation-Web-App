import Neko2D from "../Neko2D.mjs"

const toRadians = (angleInDegrees) => {
    return Math.PI * angleInDegrees / 180;
}

const toDegrees = (angleInRadians) => {
    return 180 * angleInRadians / Math.PI;
}

((module) => {
    var module = module || {};
    module.toRadians = toRadians;
    module.toDegrees = toDegrees;
    return module;
})(Neko2D || {});

export default Neko2D;