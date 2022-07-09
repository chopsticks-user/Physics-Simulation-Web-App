export const toRadians = (angleInDegrees) => {
    return Math.Pi * angleInDegrees / 180;
}

export const toDegrees = (angleInRadians) => {
    return 180 * angleInRadians / Math.PI;
}