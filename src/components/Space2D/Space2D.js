import { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import { init2D } from "../../helper/T3/init"
// import * as t3 from "three"
import { Camera2D } from "../../helper/T3/camera"

const Space2D = ({axesColor, gridLinesColor, displayAxes, displayGrid}) => {
    const ref = useRef();
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }

        const currentRef = ref.current;
        const myCam = new Camera2D(
            currentRef.clientWidth, 
            currentRef.clientHeight
        );
        const {gridScene, renderer, camera, orbit} = init2D(currentRef, axesColor, gridLinesColor);

        const animation = () => {
            if (camera.position.y > 12 || camera.position.y < 4) {
                camera.position.y = 6;
                orbit.target.z = camera.position.z;
            }
            renderer.render(gridScene, camera);
        }
        renderer.setAnimationLoop(animation);

        // aspect ratio max < 2.3
        // h/(ch*2)/tan(vfov/2) = gridSize

        const initGridLinesAttr = (cameraHeight, width, height) => {
            let apsectRatio = width / height;
            if (Math.floor(cameraHeight + 0.1) > cameraHeight) {
                cameraHeight = Math.floor(cameraHeight + 0.1);
            }
            let countHor = Math.floor(cameraHeight * 2 + 1);
            if (countHor % 2 === 0) 
                countHor--;

            let countVer = cameraHeight * apsectRatio * 2 + 1;
            let flooredCV = Math.floor(countVer)
            if (flooredCV % 2 === 0) {
                if (countVer - flooredCV > 0.5)
                    countVer = Math.ceil(countVer);
                else 
                    countVer = flooredCV - 1;
            }
            else
                countVer = flooredCV;

            return {countHor, countVer};
        }

        currentRef.addEventListener("dblclick", (e) => {
            console.log(currentRef.clientWidth, currentRef.clientHeight);
            console.log(camera.position.y);
            console.log(initGridLinesAttr(camera.position.y, 
                currentRef.clientWidth, currentRef.clientHeight));
            console.log(myCam);
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