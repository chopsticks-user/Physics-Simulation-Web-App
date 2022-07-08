import * as t3 from "three"
import { OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export const init2D = (reactRef) => {
    const camera = new t3.PerspectiveCamera(75, reactRef.clientWidth / reactRef.clientHeight, 0.1, 1000);
    const gridScene = new t3.Scene();
    const renderer = new t3.WebGLRenderer();
    renderer.setSize(reactRef.clientWidth, reactRef.clientHeight);
    reactRef.appendChild(renderer.domElement);
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.enableRotate = false;
    camera.position.set(0, 10, 0);
    orbit.update();
    
    const plane = new t3.Mesh(
        new t3.PlaneGeometry(314159, 314159), 
        new t3.MeshBasicMaterial({
            side: t3.DoubleSide, 
            visible: false
        })
    );
    gridScene.add(plane);

    const grid = new t3.GridHelper(314159, 314159);
    gridScene.add(grid);
    return {gridScene, renderer, camera, orbit};
}