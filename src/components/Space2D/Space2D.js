import { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import * as THREE from "three"

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

        // let transform = {x: 0, y: 0, k: 1};
        const container = document.querySelector(".space-2d-container");
        const w = container.clientWidth;
        const h = container.clientHeight;
        let eventStart = false;
        let eventPause = false;
        
        const camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2);
        const gridScene = new THREE.Scene();
        
        const gridSize = 50;
        const margin = {top: 25, left: 50};
        const textMargin = {top: 3, left: 5};
        for (let i = 0; i < w / gridSize - 1; i++) {
            const newVerticalGridLine = new THREE.Mesh(new THREE.PlaneGeometry(2, h), new THREE.LineBasicMaterial({color: gridLinesColor}));
            newVerticalGridLine.position.x = Math.floor(-w / 2) + margin.left + (i) * gridSize;
            newVerticalGridLine.position.y -= margin.top;
            newVerticalGridLine.rotation.y = 1;
            gridScene.add(newVerticalGridLine);
        }
        for (let i = 0; i < h / gridSize; i++) {
            const newHorizontalGridLine = new THREE.Mesh(new THREE.PlaneGeometry(w, 2), new THREE.LineBasicMaterial({color: gridLinesColor}));
            newHorizontalGridLine.position.x += margin.left;
            newHorizontalGridLine.position.y = Math.floor(-h / 2) + margin.top + h % gridSize + (i) * gridSize;
            newHorizontalGridLine.rotation.x = 1;
            gridScene.add(newHorizontalGridLine);
        }

        container.addEventListener("click", () => {
            displayGrid = !displayGrid;
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

        const animation = (time) => {
            if (displayGrid) {
                renderer.render(gridScene, camera);
            }
            
            if (!eventStart) return;
            const _outOfScene = (px, py) => {
                return outOfScene(px, py, 0, 0, Math.floor(w / 2));
            }

            renderer.clearDepth();
            if (!_outOfScene(object.position.x, object.position.y)) {
                if (!eventPause) {
                    object.position.x += 1;
                    object.position.y -= 1;
                }
                renderer.render(objectScene, camera);
            }
        }

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( container.clientWidth, container.clientHeight );
        renderer.autoClear = false;
        container.append(renderer.domElement);
        renderer.setAnimationLoop( animation );
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
