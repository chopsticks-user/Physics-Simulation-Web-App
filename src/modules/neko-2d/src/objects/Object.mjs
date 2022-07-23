import { Circle } from "./shapes/Circle.mjs"
import { Properties } from "./Properties.mjs"
import { Time } from "../Time.mjs"
import { SHAPE, PROPERTIES, OBJECT } from "../Constants.mjs"

export class Object {
    constructor(shape, properties) {
        if (!shape) {
            shape = new Circle();
        }
        if (!properties) {
            properties = new Properties();
        }
        if (shape.typename !== SHAPE || properties.typename !== PROPERTIES) {
            console.warn("From Neko2D.Object.constructor, a default object was created.");
            shape = new Circle();
            properties = new Properties();
        }
        this.properties = properties;
        this.shape = shape;
        this.shape.center = properties.position;
        this.forces = [];
        this.fields = [];
        this.attachedBy = [];
        this.tangible = true;
        this.pinned = false;
        this.attached = false;
        this.time = new Time();
    };

    get typename() {
        return OBJECT;
    }

    get vertices() {
        return this.shape.vertices;
        // according to rotational angle
    }

    get collisionData() {
        return this.shape.collisionData;
    }

    rotate = (angle) => {
        this.properties.rotation.angle += angle;
        this.properties.rotation.vector.rotate(angle);
    }

    intersect = (object) => {
        if (!object || object.typename !== OBJECT) {
            return false;
        }
        return this.shape.intersect(object.shape);
    }

    translate = (dt = 0, dax = 0, day = 0) => {
        // 
        if (this.shape.type === "circle") {
            // rotate
        }
        this.shape.center = this.properties.position;
    }
}