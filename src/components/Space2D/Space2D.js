import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { init2D } from "../../helper/T3/init"
import { Camera2D } from "../../helper/T3/Camera"
import { Grid2D } from "../../helper/T3/Grid"
import { Renderer2D } from "../../helper/T3/Renderer"
import { Orbit2D } from "../../helper/T3/Orbit"

const Space2D = ({axesColor, gridLinesColor, displayAxes, displayGrid}) => {
    const ref = useRef();
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }

        const currentRef = ref.current;
        const camera = new Camera2D(currentRef.clientWidth, currentRef.clientHeight);
        const renderer = new Renderer2D(currentRef.clientWidth, currentRef.clientHeight);
        const grid = new Grid2D();
        const orbit = new Orbit2D(camera, renderer);
        currentRef.appendChild(renderer.t3Component.domElement);

        // const {gridScene, renderer, camera, orbit} = init2D(currentRef, axesColor, gridLinesColor);

        // const animation = () => {
        //     if (camera.position.y > 12 || camera.position.y < 3) {
        //         camera.position.y = 6;
        //         orbit.target.z = camera.position.z;
        //     }
        //     renderer.render(gridScene, camera);
        // }
        // renderer.setAnimationLoop(animation);

        // aspect ratio max < 2.3
        // h/(ch*2)/tan(vfov/2) = gridSize

        const animation = () => {
            if (camera.updateViewHeight()) {
                orbit.t3Component.target.z = camera.t3Component.position.z;
            }
            renderer.t3Component.render(grid.t3Scene, camera.t3Component);
        }
        renderer.t3Component.setAnimationLoop(animation);

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
            // console.log(camera.position.y);
            // console.log(initGridLinesAttr(camera.position.y, 
            //     currentRef.clientWidth, currentRef.clientHeight));
            // console.log(myCam);
            console.log(camera.currentScale);
            console.log(orbit.t3Component);
        });

    }, [axesColor, gridLinesColor]);

    return (
        <div className="space-2d-container" ref={ref}>{console.log("Space 2D was rendered.")}</div>
        
    );
}

Space2D.defaultProps = {
    axesColor: "red", 
    gridLinesColor: "#4f4f4f", 
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