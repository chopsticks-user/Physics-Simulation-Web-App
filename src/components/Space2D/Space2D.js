import PropTypes from "prop-types"
import { useEffect, useRef } from "react"
import { Space2DController } from "../../modules/t3-helper/SpaceController.mjs"
import Neko2D from "../../modules/neko-2d"

const Space2D = ({ setGridSize, setMeasureAttr, axesColor, gridLinesColor, displayAxes, displayGrid }) => {
    const ref = useRef();

    useEffect(() => {
        const controller = new Space2DController(ref.current);
        setGridSize(controller.getGridSize());
        const space = new Neko2D.Space();
        
        ref.current.addEventListener("dblclick", () => {
            
        });

        let dragStart = {x: 0, y: 0};
        let dragCurrent = {x: 0, y: 0};
        let dragged = false;

        ref.current.addEventListener("mousedown", (e) => {
            dragStart = {x: e.offsetX, y: e.offsetY};
            dragCurrent = {x: e.offsetX, y: e.offsetY};
            dragged = true;
            console.log(dragged);
        });

        ref.current.addEventListener("mousemove", (e) => {
            if (dragged) {
                console.log(e.offsetX - dragCurrent.x, e.offsetY - dragCurrent.y);
                dragCurrent = {x: e.offsetX, y: e.offsetY};
            }
        });

        ref.current.addEventListener("mouseup", (e) => {
            dragged = false;
            console.log(e.offsetX - dragStart.x, e.offsetY - dragStart.y);
        });

        ref.current.addEventListener("wheel", () => {
            setGridSize(controller.getGridSize());
            setMeasureAttr(controller.getMeasureAttr());
        });

    }, [axesColor, gridLinesColor, setGridSize, setMeasureAttr]);

    return (
        <div className="space-2d-container"
            ref={ref}>
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