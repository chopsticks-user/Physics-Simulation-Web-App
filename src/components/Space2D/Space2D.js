import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { initGridLinesAttr } from "../../helper/T3/init"
import Space2DController from "../../helper/T3/SpaceController"

const Space2D = ({axesColor, gridLinesColor, displayAxes, displayGrid}) => {
    const ref = useRef();
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }

        let w = ref.current.clientWidth;
        let h = ref.current.clientHeight;
        const controller = new Space2DController(ref.current);

        ref.current.addEventListener("dblclick", (e) => {
            console.log(w, h);
            console.log(initGridLinesAttr(controller.camera.t3Component.position.y, w, h));
            console.log(controller.getPosition());
            console.log(controller.getGridSize());
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