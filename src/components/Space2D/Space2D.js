import { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import * as t3 from "three"
import { OrbitControls} from "three/examples/jsm/controls/OrbitControls"

const Space2D = ({scaleMin, scaleMax, axesColor, gridLinesColor, displayGrid, displayAxes}) => {
    const ref = useRef();
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }

        const currentRef = ref.current;
        const w = currentRef.clientWidth;
        const h = currentRef.clientHeight;
        let eventStart = false;
        let eventPause = false;

        const camera = new t3.PerspectiveCamera(75, w / h, 0.1, 1000);
        const scene = new t3.Scene();
        const renderer = new t3.WebGLRenderer();
        renderer.setSize(w, h);
        currentRef.appendChild(renderer.domElement);
        const orbit = new OrbitControls(camera, renderer.domElement);
        orbit.enableRotate = false;
        camera.position.set(0, 10, 0);
        orbit.update();
        
        const plane = new t3.Mesh(
            new t3.PlaneGeometry(3141591, 3141591), 
            new t3.MeshBasicMaterial({
                side: t3.DoubleSide, 
                visible: false
            })
        );
        scene.add(plane);

        const grid = new t3.GridHelper(3141591, 3141591);
        scene.add(grid);

        const animation = () => {
            if (camera.position.y > 20 || camera.position.y < 5) {
                camera.position.y = 10;
                orbit.target.z = camera.position.z;
            }
            renderer.render(scene, camera);
        }
        renderer.setAnimationLoop(animation);

        currentRef.addEventListener("dblclick", (e) => {
            console.log(camera.position);
            console.log(orbit.target);
        });

    }, [axesColor, gridLinesColor, displayGrid]);

    return (
        <div className="space-2d-container" ref={ref}>
            {/* <div style={{
                "height": "25px", 
                "color": "white", 
                "position": "absolute", 
                "font-size": "12px", 
                "display": "flex", 
                "alignItems": "center", 
                "width": "calc(100% - 60px)", 
                "right": "0px", 
            }}>
                <ul style={{
                    "listStyle": "none", 
                    "display": "inline-flex", 
                    "columnGap": "35px", 
                    "left": "50px", 
                }}>
                    <li>0.01</li>
                    <li>0.02</li>
                    <li>0.03</li>
                    <li>0.04</li>
                </ul>
            </div> */}
        </div>
        
    );
}

Space2D.defaultProps = {
    scaleMin: 0.001, 
    scaleMax: 10, 
    axesColor: "red", 
    gridLinesColor: "white", 
    displayGrid: true, 
    displayAxes: true, 
}

Space2D.propTypes = {
    scaleMin: PropTypes.number.isRequired, 
    scaleMax: PropTypes.number.isRequired, 
    axesColor: PropTypes.string.isRequired, 
    gridLinesColor: PropTypes.string.isRequired, 
    displayGrid: PropTypes.bool.isRequired, 
    displayAxes: PropTypes.bool.isRequired, 
}

export default Space2D;