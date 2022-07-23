export const strictlyNumber = (...args) => {
    let len = args.length;
    while (len--) {
        if (typeof args[len] !== "number" || args[len] !== args[len] || Math.abs(args[len]) === Infinity) {
            return false;
        }
    }
    return len ? true: false;
}

export const looselyNumber = (...args) => {
    let len = args.length;
    while (len--) {
        if (typeof args[len] !== "number" || args[len] !== args[len]) {
            return false;
        }
    }
    return len ? true: false;
}

export const looselyV2 = (...args) => {
    let len = args.length;
    while (len--) {
        if (!args[len] || !strictlyNumber(args[len].x, args[len].y)) {
            return false;
        }
    }
    return len ? true: false;
}

