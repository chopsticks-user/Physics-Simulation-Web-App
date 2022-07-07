import { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import * as THREE from "three"
import { grid2D, camera2D } from "./Helper"

const Space2D = ({scaleMin, scaleMax, axesColor, gridLinesColor, displayGrid, displayAxes}) => {
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

        const container = document.querySelector(".space-2d-container");
        const w = container.clientWidth;
        const h = container.clientHeight;
        let eventStart = false;
        let eventPause = false;
        
        const camera = camera2D(w, h);
        const gridScene = grid2D(50, w, h, gridLinesColor);

        container.addEventListener("click", () => {
            displayGrid = !displayGrid;
            console.log(displayGrid);
        });

        container.addEventListener("wheel", () => {
            if (eventStart) {
                eventPause = !eventPause;
            }
            else {
                eventStart = true;
            }
        });

        const objectScene = new THREE.Scene();
        const object = new THREE.Mesh(new THREE.PlaneGeometry(340, 279), new THREE.LineBasicMaterial({color: "red"}));
        object.rotation.x = 1;
        objectScene.add(object);

        const animationHandler = () => {
            if (displayGrid) {
                renderer.render(gridScene, camera);
            }

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
        renderer.setSize( container.clientWidth, container.clientHeight );
        renderer.autoClear = false;
        renderer.setAnimationLoop(animationHandler);
        container.append(renderer.domElement);

    }, [axesColor, gridLinesColor, displayGrid]);

    return (
        <div className="space-2d-container"></div>
        
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
