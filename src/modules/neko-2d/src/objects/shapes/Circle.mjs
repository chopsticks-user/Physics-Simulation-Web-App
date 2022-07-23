import { Shape } from "./Shape.mjs"

export class Circle extends Shape {
    constructor(radius = 0, center = { x: 0, y: 0 }) {
        super("circle", center);
        this.radius = radius;
    }

    get maxReach() {
        return this.radius;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    get circumference() {
        return Math.PI * this.radius * 2;
    }

    get collisionData() {
        return { x: this.center.x, y: this.center.y, maxReach: this.maxReach };
    }

    intersect = (rhs) => {
        if (this.outOfRange(rhs)) {
            return false;
        }
        if (rhs.type === "circle") {
            return true;
        }
        let minDistance = Infinity;
        let nVertices = rhs.vertices.length;
        while (nVertices--) {
            minDistance = Math.min(
                minDistance, this.distance(rhs.vertices[nVertices])
            );
            if (minDistance <= this.radius) {
                return true;
            }
        }
        return false;
    }
}


