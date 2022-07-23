import { timeStart } from "../ultis/Ultis.module.js"
import { TIME } from "./Constants.mjs"

export class Time {
    constructor() {
        this.start = timeStart();
        this.lastEvent = this.start;
        this.unit = "ms";
        this.memo = [this.start];
    }
    get typename() {
        return TIME;
    }
    get current() {
        const currentTime = timeStart();
        this.memo.push(currentTime);
        this.lastEvent = this.memo[0];
        return currentTime;
    }
}
