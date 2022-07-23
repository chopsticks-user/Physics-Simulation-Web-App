export const formatCoord3DPs = (point) => {
    return {x: formatDPs(point.x, 3), y: formatDPs(point.y, 3)};
}

export const formatDPs = (value, nDPs) => {
    return value.toFixed(nDPs);
}
