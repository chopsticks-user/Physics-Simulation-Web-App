import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Camera2D } from "../../helper/T3/Camera"
import { Grid2D } from "../../helper/T3/Grid"
import { Renderer2D } from "../../helper/T3/Renderer"
import { Orbit2D } from "../../helper/T3/Orbit"
import { initGridLinesAttr } from "../../helper/T3/init"

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

        const animation = () => {
            if (camera.updateViewHeight()) {
                orbit.t3Component.target.z = camera.t3Component.position.z;
            }
            renderer.t3Component.render(grid.t3Scene, camera.t3Component);
        }
        renderer.t3Component.setAnimationLoop(animation);

        currentRef.addEventListener("dblclick", (e) => {
            console.log(currentRef.clientWidth, currentRef.clientHeight);
            console.log(camera.t3Component.position.y);
            console.log(initGridLinesAttr(camera.t3Component.position.y, 
                currentRef.clientWidth, currentRef.clientHeight));
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