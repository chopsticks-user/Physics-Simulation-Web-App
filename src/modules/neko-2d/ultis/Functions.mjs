export const curryFunction = (targetFunction, ...args) => {
    return () => targetFunction(...args);
};

export const groupCurriedFunctions = (...curriedFunctions) => {
    return;
}

export const defConst = (scope, propName, propValue) => {
    Object.defineProperty(scope, propName, {
        value: propValue,
        writable: false,
        enumerable: true
    });
}