import PropTypes from "prop-types"
import { useEffect, useRef } from "react"
import { Space2DController } from "../../modules/t3-helper/SpaceController.mjs"
import Neko2D from "../../modules/neko-2d"

const Space2D = ({ setGridSize, setMeasureAttr, axesColor, gridLinesColor, displayGrid }) => {
    const ref = useRef();
    const displayGridRef = useRef(displayGrid);

    useEffect(() => {
        let ts = performance.now();
        const controller = new Space2DController(ref.current);
        setGridSize(controller.getGridSize());
        const space = new Neko2D.Space();
        
        let dragStart = controller.camera.getPosition();
        let dragCurrent = controller.camera.getPosition();
        let dragLast = controller.camera.getPosition();
        let dragged = false;

        ref.current.addEventListener("mousedown", () => {
            dragStart = controller.camera.getPosition();
            dragLast = controller.camera.getPosition();
            dragged = true;
            console.log(dragStart);
            console.log(space.view);
        });

        ref.current.addEventListener("mousemove", () => {
            if (dragged) {
                dragCurrent = controller.camera.getPosition();
                if (dragLast.x !== dragCurrent.x || dragLast.y !== dragCurrent.y) {
                    space.transform(
                        dragCurrent.x - dragLast.x,
                        dragCurrent.y - dragLast.y
                    );
                    dragLast = dragCurrent;
                }
            }
        });

        ref.current.addEventListener("mouseup", () => {
            dragged = false;
            console.log(dragCurrent);
            console.log(space.view);
        });

        ref.current.addEventListener("wheel", () => {
            setGridSize(controller.getGridSize());
            setMeasureAttr(controller.getMeasureAttr());
            space.scale = controller.camera.currentScale;
            console.log(space.scale);
        });

        ref.current.addEventListener("dblclick", () => {
            displayGridRef.current = !displayGridRef.current;
            console.log(displayGridRef.current);
            controller.displayGrid(displayGridRef.current);
        });
        console.log(performance.now() - ts);
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
    displayGrid: true
}

Space2D.propTypes = {
    axesColor: PropTypes.string.isRequired,
    gridLinesColor: PropTypes.string.isRequired,
    displayGrid: PropTypes.bool.isRequired
}

export default Space2D;