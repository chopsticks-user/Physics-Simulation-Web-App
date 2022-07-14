import "./src/Space.mjs"
import "./src/Object.mjs"
import "./src/Property.mjs"
import Neko2D from "./Neko2D.mjs"

console.log(Neko2D);
const bb = new Neko2D.Space(2, 1);
const ss = new Neko2D.Object(
    new Neko2D.Property({ 
        dy: 1, 
        dx: .4, 
        dxs: -2.4, 
        dyc: .1, 
        dxb: -1, 
        day: 0 
    })
);
console.log(bb);
console.log(ss);

export default Neko2D;