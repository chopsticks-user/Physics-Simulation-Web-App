import PropTypes from "prop-types"
import { useEffect, useRef } from "react"
import { Space2DController } from "../../modules/t3-helper/SpaceController.mjs"
import Neko2D from "../../modules/neko-2d"

const Space2D = ({ setCenter, setMeasureAttr, axesColor, gridLinesColor, displayGrid }) => {
    const ref = useRef();
    const displayGridRef = useRef(displayGrid);

    useEffect(() => {
        const controller = new Space2DController(ref.current);
        
        let dragStart = controller.camera.getPosition();
        let dragCurrent = controller.camera.getPosition();
        let dragLast = controller.camera.getPosition();
        let dragged = false;

        ref.current.addEventListener("mousedown", () => {
            dragStart = controller.camera.getPosition();
            dragLast = controller.camera.getPosition();
            dragged = true;
        });

        ref.current.addEventListener("mousemove", () => {
            if (dragged) {
                dragCurrent = controller.camera.getPosition();
                if (dragLast.x !== dragCurrent.x || dragLast.y !== dragCurrent.y) {
                    dragLast = dragCurrent;
                    setCenter({x: dragCurrent.x, y: dragCurrent.y});
                }
            }
        });

        ref.current.addEventListener("mouseup", () => {
            dragged = false;
        });

        ref.current.addEventListener("dblclick", () => {
            displayGridRef.current = !displayGridRef.current;
            controller.displayGrid(displayGridRef.current);
            console.log(controller.camera.t3Component.position);
            console.log(controller.orbit.t3Component.target);
            console.log(controller.getGridSize());
        });
    }, [axesColor, gridLinesColor, setCenter, setMeasureAttr]);

    return (
        <div className="space-2d-container"
            ref={ref}>
        </div>

    );
}

Space2D.defaultProps = {
    axesColor: "red",
    gridLinesColor: "#4f4f4f",
    displayGrid: true
}

Space2D.propTypes = {
    axesColor: PropTypes.string.isRequired,
    gridLinesColor: PropTypes.string.isRequired,
    displayGrid: PropTypes.bool.isRequired
}

export default Space2D;