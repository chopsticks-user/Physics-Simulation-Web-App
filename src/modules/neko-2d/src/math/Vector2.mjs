import { VECTOR2 } from "../Constants.mjs"
// import { strictlyNumber, looselyV2 } from "../../ultis/Ultis.module.js"

export class V2 {
    constructor(x = 1, y = 1) {
        // if (!strictlyNumber(x, y)) {
        //     console.warn("From Neko2D.V2.constructor, a default vector was created.");
        //     x = y = 1;
        // }
        this.x = x;
        this.y = y;
    }

    get typename() {
        return VECTOR2;
    }

    get magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    get direction() {
        if (this.x && this.y) {
            console.warn("From Neko2D.V2.direction, <0, 0>.");
            return;
        }
        return Math.arctan(this.y / this.x);
    }

    get unit() {
        const mag = this.magnitude;
        if (!mag) {
            console.warn("From Neko2D.V2.unit, <0, 0>.");
            return;
        }
        return new V2(this.x / mag, this.y / mag);
    }

    get normal() {
        return new V2(-this.y, this.x);
    }

    get opposite() {
        return new V2(-this.x, -this.y);
    }

    rotate = (angle) => {
        const rotatedVector = new V2.fromProperties(
            this.magnitude, this.direction + angle
        );
        this.x = rotatedVector.x;
        this.y = rotatedVector.y;
    }

    static fromPoints = (initialP, terminalP) => {
        // if (!looselyV2(initialP, terminalP)) {
        //     console.warn("From Neko2D.V2.fromProperties, invalid arguments.");
        //     return;
        // }
        return new V2(terminalP.x - initialP.x, terminalP.y - initialP.y);

    }

    static fromProperties = (magnitude, direction) => {
        // if (!strictlyNumber(magnitude, direction)) {
        //     console.warn("From Neko2D.V2.fromProperties, both magnitude and direction must be numbers.");
        //     return;
        // }
        const x = Math.sqrt(magnitude ** 2 / (Math.tan(direction) ** 2 + 1));
        const y = x * Math.tan(direction);
        return new Math.V2(x, y);
    }

    static sum = (...vectors) => {
        // if (!looselyV2(...vectors)) {
        //     console.warn("From Neko2D.V2.sum, an invalid vector was detected.");
        //     return;
        // }
        let len = vectors.length;
        let results = new V2(0, 0);
        while (len--) {
            results.x += vectors[len].x;
            results.y += vectors[len].y;
        }
        return results;
    }

    static scalarProduct = (scalar, ...vectors) => {
        // if (!strictlyNumber(scalar)) {
        //     console.warn("From Neko2D.V2.dotProduct, invalid scalar.");
        //     return;
        // }
        // if (!looselyV2(...vectors)) {
        //     console.warn("From Neko2D.V2.dotProduct, an invalid vector was detected.");
        //     return;
        // }
        const len = vectors.length;
        if (len === 0) {
            return scalar;
        }
        const results = vectors.map((vector) => {
            return new V2(scalar * vector.x, scalar * vector.y);
        });
        return len === 1 ? results[0] : results;
    }

    static dotProduct = (rVector, ...lVectors) => {
        // if (!looselyV2(rVector, ...lVectors)) {
        //     console.warn("From Neko2D.V2.dotProduct, an invalid vector was deteced.");
        //     return;
        // }
        const len = lVectors.length;
        if (!len) {
            return rVector;
        }
        const results = lVectors.map((lVector) => {
            return rVector.x * lVector.x + rVector.y * lVector.y;
        });
        return len === 1 ? results[0] : results;
    }

    static crossProduct = (...vectors) => {
        // if (!looselyV2(...vectors)) {
        //     console.warn("From Neko2D.V2.crossProduct, an invalid vector was deteced.");
        //     return;
        // }
        const len = vectors.length;
        switch (len) {
            case 0: {
                console.warn("From Neko2D.V2.crossProduct, no argument.");
                return;
            }
            case 1: {
                return vectors[0];
            }
            case 2: {
                return vectors[0].x * vectors[1].y - vectors[0].y * vectors[1].x;
            }
            default: {
                if (len > 3) {
                    console.warn("From Neko2D.V2.crossProduct, only the first three vectors were computed.");
                }
                const dotProducts = this.dotProduct(vectors[2], vectors[0], vectors[1]);
                return this.sum(
                    this.scalarProduct(dotProducts[0], vectors[1]),
                    this.scalarProduct(-dotProducts[1], vectors[0])
                );
            }
        }
    }
}
