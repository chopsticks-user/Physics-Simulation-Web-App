import { useEffect, useRef } from 'react'
import { grid2D, camera2D } from "./Helper"
import PropTypes from "prop-types"
import * as THREE from "three"

const Space2D = ({scaleMin, scaleMax, axesColor, gridLinesColor, displayGrid, displayAxes}) => {
    const ref = useRef();
    const isMounted = useRef(false);

    const outOfScene = (px, py, ox, oy, margin) => {
        if ((px > ox + margin || px < ox - margin) && (py > oy + margin || py < oy - margin)) return true;
        return false;
    }
    
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
        
        const camera = camera2D(w, h);
        const gridScene = grid2D(50, w, h, gridLinesColor);

        currentRef.addEventListener("click", () => {
            displayGrid = !displayGrid;
        });

        currentRef.addEventListener("wheel", () => {
            eventStart ? eventPause = !eventPause : eventStart = true;
        });

        const objectScene = new THREE.Scene();
        const object = new THREE.Mesh(new THREE.PlaneGeometry(340, 279), new THREE.LineBasicMaterial({color: "red"}));
        object.rotation.x = 1;
        objectScene.add(object);

        const animationHandler = () => {
            displayGrid ? renderer.render(gridScene, camera) : renderer.clear();
            if (!eventStart) return;

            const _outOfScene = (px, py) => {
                return outOfScene(px, py, 0, 0, Math.floor(w / 2));
            }

            if (!_outOfScene(object.position.x, object.position.y)) {
                if (!eventPause) {
                    object.position.x += 1;
                    object.position.y -= 1;
                }
                renderer.clearDepth();
                renderer.render(objectScene, camera);
            }
        }

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( w, h );
        renderer.autoClear = false;
        renderer.setAnimationLoop(animationHandler);
        currentRef.append(renderer.domElement);

    }, [axesColor, gridLinesColor, displayGrid]);

    return (
        <div className="space-2d-container" ref={ref}>
            <div style={{
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
            </div>
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
