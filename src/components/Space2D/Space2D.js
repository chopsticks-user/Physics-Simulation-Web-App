import { useEffect, useRef } from 'react'
import PropTypes from "prop-types"
import { init2D } from "../../helper/T3/init"

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
            if (camera.position.y > 20 || camera.position.y < 5) {
                camera.position.y = 10;
                orbit.target.z = camera.position.z;
            }
            renderer.render(gridScene, camera);
        }
        renderer.setAnimationLoop(animation);

        currentRef.addEventListener("dblclick", () => {
            console.log(camera.position);
            console.log(orbit.target);
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