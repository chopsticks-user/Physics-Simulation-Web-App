import { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import { init2D } from "../../helper/T3/init"
// import * as t3 from "three"

const Space2D = ({axesColor, gridLinesColor, displayAxes, displayGrid}) => {
    const ref = useRef();
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }

        const currentRef = ref.current;
        const {gridScene, renderer, camera, orbit} = init2D(currentRef, axesColor, gridLinesColor);

        const animation = () => {
            if (camera.position.y > 12 || camera.position.y < 4) {
                camera.position.y = 6;
                orbit.target.z = camera.position.z;
            }
            renderer.render(gridScene, camera);
        }
        renderer.setAnimationLoop(animation);

        // aspect ratio max <= 2.3

        const countGridLines = (cameraHeight, width, height) => {
            let apsectRatio = width / height;
            if (Math.floor(cameraHeight + 0.1) > cameraHeight) {
                cameraHeight = Math.floor(cameraHeight + 0.1);
            }
            let countHor = Math.floor(cameraHeight * 2 + 1);
            if (countHor % 2 === 0) countHor--;

            let countVer = Math.floor(cameraHeight * apsectRatio * 2 + 1);
            if (countVer % 2 === 0) countVer--;
            
            return {countHor, countVer};
        }

        currentRef.addEventListener("dblclick", (e) => {
            // console.log(camera.position);
            // console.log(orbit.target);
            console.log(e.clientX, e.clientY);
            console.log(camera.position.y);
            console.log(countGridLines(camera.position.y, currentRef.clientWidth, currentRef.clientHeight));
        });

    }, [axesColor, gridLinesColor]);

    return (
        <div className="space-2d-container" ref={ref}>{console.log("Space 2D was rendered.")}</div>
        
    );
}

Space2D.defaultProps = {
    axesColor: "red", 
    gridLinesColor: "#888888", 
    displayGrid: true, 
    displayAxes: true, 
}

Space2D.propTypes = {
    axesColor: PropTypes.string.isRequired, 
    gridLinesColor: PropTypes.string.isRequired, 
    displayGrid: PropTypes.bool.isRequired, 
    displayAxes: PropTypes.bool.isRequired, 
}

export default Space2D;