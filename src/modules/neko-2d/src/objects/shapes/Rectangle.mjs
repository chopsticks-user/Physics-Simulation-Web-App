// import { Shape } from "./Shape.mjs"
// import { SAT } from "../../collisions/SAT.mjs"

// export class Rectangle extends Shape {
//     constructor(width = 0, height = 0, center = { x: 0, y: 0 }) {
//         super("rectangle", center);
//         this.width = width;
//         this.height = height;
//     }

//     get vertices() {
//         return [
//             { x: center.x - width / 2, y: center.y + height / 2 },
//             { x: center.x + width / 2, y: center.y + height / 2 },
//             { x: center.x - width / 2, y: center.y - height / 2 },
//             { x: center.x + width / 2, y: center.y - height / 2 }
//         ];
//     }

//     get maxReach() {
//         return Math.sqrt(this.width ** 2 + this.height ** 2);
//     }

//     get area() {
//         return this.width * this.heigth;
//     }

//     get perimeter() {
//         return (this.width + this.heigth) * 2;
//     }

//     get collisionData() {
//         return { x: this.center.x, y: this.center.y, maxReach: this.maxReach };
//     }

//     intersect = (rhs) => {
//         if (this.outOfRange(rhs)) {
//             return false;
//         }
//         if (rhs.type === "circle") {
//             return rhs.intersect(this);
//         }
//         return SAT(this, rhs);
//     }
// }

