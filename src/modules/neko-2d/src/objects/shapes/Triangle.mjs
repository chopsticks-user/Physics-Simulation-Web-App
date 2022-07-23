import { Shape } from "./Shape.mjs";

export class Triangle extends Shape {
    constructor(bottomEdge = 0, rightAngle = 0, leftAngle = 0, center = { x: 0, y: 0 }) {
        super("triangle", center);
        this.parameters = {
            bottomEdge: bottomEdge,
            rightAngle: rightAngle,
            leftAngle: leftAngle
        }
    }

    get vertices() {
        return [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
        ];
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
}

