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
        
        const camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2);
        const scene = new THREE.Scene();

        const geometry = new THREE.PlaneGeometry(100, 100);
        const material = new THREE.LineBasicMaterial({color: "red" });
        const mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        const lgeometry = new THREE.PlaneGeometry(100, 100);
        const lmaterial = new THREE.LineBasicMaterial({color: "white" });
        const lmesh = new THREE.Mesh( lgeometry, lmaterial );
        scene.add( lmesh );

        const ggeometry = new THREE.PlaneGeometry(100, 100);
        const gmaterial = new THREE.LineBasicMaterial({color: "white" });
        const gmesh = new THREE.Mesh( ggeometry, gmaterial );
        scene.add( gmesh );

        function animation( time ) {
            mesh.rotation.y = 1;
            lmesh.rotation.y = 1;

            mesh.position.x += 1;
            lmesh.position.x -= 1;
            
            if (mesh.position.x > w/2) {
                mesh.position.x = -w/2;
            }
            if (lmesh.position.x < -w/2) {
                lmesh.position.x = w/2;
            }
            renderer.render( scene, camera );
        }

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( container.clientWidth, container.clientHeight );
        renderer.setAnimationLoop( animation );
        container.append( renderer.domElement );
        renderer.render(scene, camera);
    }, []);

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
