SyntaxError: Cannot use import statement outside a module

       5 | import { toRadians } from "../neko-2d/src/ultis/ConvertMS.js"
       6 | import * as THREE from "three"
    >  7 | import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
         | ^
       8 |
       9 | class Space2DController {
      10 |     constructor(parentDomElement) {

-> fixed, copy OrbitControls.js to folder <t3-helper>
-------------------------------------------------------------------------------------------------------------------------------------------------------
Error: canvas element not showing up in the build production

-> fixed, add "homepage": "./" in the package.json file, add a package.json file in <t3-helper>
then run: "npm install --save ./src/modules/t3-helper"
-------------------------------------------------------------------------------------------------------------------------------------------------------
