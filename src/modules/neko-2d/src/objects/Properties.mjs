import { PROPERTIES } from "../Constants.mjs"
import { V2 } from "../math/Vector2.mjs";
// import { looselyV2, strictlyNumber } from "../../ultis/Ultis.module.js"

export class Properties {
    constructor({
        position = { x: 0, y: 0 },
        velocity = { x: 0, y: 0 },
        acceleration = { x: 0, y: 0 },
        mass = 1,
        friction = 0
    }) {
        this.position = new V2(position.x, position.y);
        this.velocity = new V2(velocity.x, velocity.y);
        this.acceleration = new V2(acceleration.x, acceleration.y);
        this.rotation = {
            angle: 0,
            vector: new V2(1, 0)
        }
        this.mass = mass;
        this.friction = friction;
    }

    get typename() {
        return PROPERTIES;
    }

    get momentum() { }

    get kineticEnergy() { }

    get potentialEnergy() { }

    get totalEnergy() { }
}
