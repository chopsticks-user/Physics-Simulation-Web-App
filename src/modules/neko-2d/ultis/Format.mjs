import Neko2D from "../Neko2D.mjs"

const formatDPs = (value, nDPs) => {
    return value.toFixed(nDPs);
}

const formatCoord3DPs = (point) => {
    return {x: formatDPs(point.x, 3), y: formatDPs(point.y, 3)};
}

((module) => {
    var module = module || {};
    module.formatCoord3DPs = formatCoord3DPs;
    module.formatDPs = formatDPs;
    return module;
})(Neko2D || {});

export default Neko2D;