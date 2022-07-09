import * as t3 from "three"
import { OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export const init2D = (reactRef, axesColor, gridLinesColor) => {
    const cameraHeight = 12;
    const vfov = 91;
    const aspectRatio = reactRef.clientWidth / reactRef.clientHeight;
    const nGrids = 31416;
    const camera = new t3.PerspectiveCamera(vfov, aspectRatio, 0.1, 1000);
    const gridScene = new t3.Scene();
    const renderer = new t3.WebGLRenderer();
    renderer.setSize(reactRef.clientWidth, reactRef.clientHeight);
    reactRef.appendChild(renderer.domElement);
    camera.position.set(0, cameraHeight, 0);
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.enableRotate = false;
    orbit.update();
    
    const plane = new t3.Mesh(
        new t3.PlaneGeometry(nGrids, nGrids), 
        new t3.MeshBasicMaterial({
            side: t3.DoubleSide, 
            visible: false
        })
    );
    gridScene.add(plane);

    const grid = new t3.GridHelper(nGrids, nGrids, axesColor, gridLinesColor);
    gridScene.add(grid);
    return {gridScene, renderer, camera, orbit};
}