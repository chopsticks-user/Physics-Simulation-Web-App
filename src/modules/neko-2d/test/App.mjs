import Neko2D from "./cppModules.mjs"
import { performance } from "perf_hooks"

const sum = () => {
    let r = 0;
    for (let i = 0; i < 20; i++) {
        r += Math.E ** i;
    }
    return r;
}

let ts;
let test = 1000000;
let totalCppRuntime = 0;
let totalJsRuntime = 0;
for (let j = 0; j < test; j++) {
    let jsRunTime = 0;
    let cppRunTime = 0;

    ts = performance.now();
    Neko2D.sum();
    cppRunTime += performance.now() - ts;

    ts = performance.now();
    sum();
    jsRunTime += performance.now() - ts;

    totalJsRuntime += jsRunTime;
    totalCppRuntime += cppRunTime;
}

console.log(`Cpp runtime: ${totalCppRuntime} ms`);
console.log(`Js runtime: ${totalJsRuntime} ms`);

var v = new Neko2D.vector();
v.set(0, 999999);
v.set(1, 282);

var v1 = new Neko2D.vector();
v1.set(0, 17);
v1.set(1, 999);

console.log(v.get(0), v.get(1), v.get(2));
console.log(v1.get(0), v1.get(1), v1.get(2));

var s = new Neko2D.myClass(15, "ahahaha");
console.log(s.x);
s.incrementX();
console.log(s.x);
console.log(s["x"]);
s.delete();

var s = new Neko2D.myClass(25, "ahahaha");
console.log(s["x"]);