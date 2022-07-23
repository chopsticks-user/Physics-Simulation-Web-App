import { SHAPE } from "../../Constants.mjs"
import { V2 } from "../../math/Vector2.mjs"

export class Shape {
    constructor(type = "circle", center = { x: 0, y: 0 }) {
        this.type = type;
        this.center = new V2(center.x, center.y);
    }

    get typename() {
        return SHAPE;
    }

    static get shapeList() {
        return ["circle", "rectangle", "triangle"];
    }

    outOfRange = (rhs) => {
        return this.maxReach + rhs.maxReach < this.distance(rhs);
    }

    distance = (...args) => {
        let len = args.length;
        if (!len) {
            // console.warn("From Shape.distance, no argument.");
            return;
        }
        const results = args.map((arg) => {
            if (arg.typename === SHAPE) {
                return Math.sqrt(
                    (this.center.x - arg.center.x) ** 2 + (this.center.y - arg.center.y) ** 2
                );
            }
            return Math.sqrt(
                (this.center.x - arg.x) ** 2 + (this.center.y - arg.y) ** 2
            );
        });
        return len === 1 ? results[0] : results;
    }
}
