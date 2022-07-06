import { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import * as THREE from "three"

const Space2D = ({scaleMin, scaleMax, axesColor, gridLinesColor, displayGrid, displayAxes}) => {
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }

        // let transform = {x: 0, y: 0, k: 1};
        const container = document.querySelector(".space-2d-container");
        const w = container.clientWidth;
        const h = container.clientHeight;
        console.log(w, h);
        
        const camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2);
        const scene = new THREE.Scene();

        // const geometry = new THREE.PlaneGeometry(3, h);
        // const material = new THREE.LineBasicMaterial({color: "red" });
        // const mesh = new THREE.Mesh( geometry, material );
        // scene.add( mesh );
        // const llmesh = new THREE.Mesh( geometry, material );
        // scene.add( llmesh );

        // const lgeometry = new THREE.PlaneGeometry(3, h);
        // const lmaterial = new THREE.LineBasicMaterial({color: "white" });
        // const lmesh = new THREE.Mesh( lgeometry, lmaterial );
        // scene.add( lmesh );
        // lmesh.position.x = 100;

        // const ggeometry = new THREE.PlaneGeometry(2, h);
        // const gmaterial = new THREE.LineBasicMaterial({color: "white" });
        // const gmesh = new THREE.Mesh( ggeometry, gmaterial );
        // scene.add( gmesh );

        // container.addEventListener("mousewheel", () => {
        //     mesh.position.x += 1;
        // });

        // function animation( time ) {
        //     mesh.rotation.y = 1;
        //     lmesh.rotation.y = 1;
        //     llmesh.rotation.y = 1;

        //     // mesh.position.x += 1/2;
        //     // lmesh.position.x -= 1/2;

        //     if (mesh.position.x > w/2) {
        //         mesh.position.x = -w/2;
        //     }
        //     if (lmesh.position.x < -w/2) {
        //         lmesh.position.x = w/2;
        //     }
        //     renderer.render( scene, camera );
        // }
        
        const gridSize = 50;
        
        for (let i = 0; i < w / gridSize; i++) {
            const newVerticalGridLine = new THREE.Mesh(new THREE.PlaneGeometry(i === 0 ? 4 : 2, h), new THREE.LineBasicMaterial({color: i === 0 ? axesColor : gridLinesColor}));
            newVerticalGridLine.position.x = -w / 2 + 0 + i * gridSize;
            newVerticalGridLine.rotation.y = 1;
            scene.add(newVerticalGridLine);
        }
        for (let i = 0; i < h / gridSize; i++) {
            const newHorizontalGridLine = new THREE.Mesh(new THREE.PlaneGeometry(w, i === 0 ? 4 : 2), new THREE.LineBasicMaterial({color: i === 0 ? axesColor : gridLinesColor}));
            newHorizontalGridLine.position.y = -h / 2 + 1 + i * gridSize;
            newHorizontalGridLine.rotation.x = 1;
            scene.add(newHorizontalGridLine);
        }

        const animation = () => {
            renderer.render(scene, camera);
        }

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( container.clientWidth, container.clientHeight );
        renderer.setAnimationLoop( animation );
        container.append( renderer.domElement );
        renderer.render(scene, camera);
    }, [axesColor, gridLinesColor]);

    return (
        <div className="space-2d-container"></div>
        
    );
}

Space2D.defaultProps = {
    scaleMin: 0.001, 
    scaleMax: 10, 
    axesColor: "yellow", 
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
