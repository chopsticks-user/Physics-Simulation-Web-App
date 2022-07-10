import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Space2DController from "../../helper/T3/SpaceController"

const Space2D = ({setGridSize, setMeasure, axesColor, gridLinesColor, displayAxes, displayGrid}) => {
    const ref = useRef();
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(isMounted.current) {
            // let w = ref.current.clientWidth;
            // let h = ref.current.clientHeight;
            const controller = new Space2DController(ref.current);
            setGridSize(controller.getGridSize());

            ref.current.addEventListener("dblclick", (e) => {
                
            });

            ref.current.addEventListener("wheel", () => {
                setGridSize(controller.getGridSize());
                setMeasure(controller.getMeasureAttr());
                console.log(controller.getGridSize(), controller.getMeasureAttr());
            });
        } else {
            isMounted.current = true;
        }

    }, [axesColor, gridLinesColor, setGridSize, setMeasure]);

    return (
        <div className="space-2d-container" 
            ref={ref}>
            {console.log("Space 2D was rendered.")}
        </div>
        
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