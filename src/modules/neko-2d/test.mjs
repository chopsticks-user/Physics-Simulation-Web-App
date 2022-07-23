import * as Neko2D from "./Neko2D.module.js"
import { funcExeTime } from "./Neko2D.module.js"

const createObject = (radius, x, y) => {
    return new Neko2D.Object(
        new Neko2D.Circle(radius),
        new Neko2D.Properties({
            position: { x: x, y: y }
        })
    )
}

const test = () => {
    let n = 60;
    const nObjects = 1000;
    const spaceSize = 1000000;
    const space = new Neko2D.Space(spaceSize, spaceSize);
    while (n--) {
        for (let i = 0; i < nObjects; i++) {
            space.insert(createObject(10, Math.random() * 2000000 - 1000000, Math.random() * 2000000 - 1000000));
        }
        space.update();
        space.clear();
    }
}

funcExeTime("Test QuadTree + Space", test);
