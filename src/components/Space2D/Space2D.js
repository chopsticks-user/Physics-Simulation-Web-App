import PropTypes from "prop-types"
import { useEffect, useRef } from "react"
import { Space2DController } from "../../modules/t3-helper/SpaceController.mjs"

const Space2D = ({ setCenter, setSelectedPoint, setMeasureAttr, axesColor, gridLinesColor, displayGrid }) => {
    const ref = useRef();
    const displayGridRef = useRef(displayGrid);

    useEffect(() => {
        const [w, h] = [ref.current.clientWidth, ref.current.clientHeight];
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

        ref.current.addEventListener("mousemove", (e) => {
            dragCurrent = controller.camera.getPosition();
            if (dragged) {
                if (dragLast.x !== dragCurrent.x || dragLast.y !== dragCurrent.y) {
                    dragLast = dragCurrent;
                    setCenter({x: dragCurrent.x, y: dragCurrent.y});
                }
            } else {
                const gridSize = controller.getGridSize();
                const mouseLoc = {x: e.offsetX, y: e.offsetY};
                const pointVal = {
                    x:(e.offsetX - w / 2) / gridSize + dragCurrent.x, 
                    y: (h / 2 - e.offsetY) / gridSize + dragCurrent.y
                }
                pointVal.x += Math.ceil(pointVal.x) / gridSize;
                pointVal.y += Math.floor(pointVal.y) / gridSize;
                setSelectedPoint({pointVal, mouseLoc});
            }
        });

        ref.current.addEventListener("mouseup", () => {
            dragged = false;
        });

        ref.current.addEventListener("dblclick", () => {
            displayGridRef.current = !displayGridRef.current;
            controller.displayGrid(displayGridRef.current);
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