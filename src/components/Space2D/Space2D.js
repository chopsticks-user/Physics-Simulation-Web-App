import PropTypes from "prop-types"
import { useEffect, useRef } from "react"
import { Space2DController } from "../../modules/t3-helper/SpaceController.mjs"
import Neko2D from "../../modules/neko-2d"

const Space2D = ({ setCenter, setMeasureAttr, setSelectedPoint, axesColor, gridLinesColor, displayGrid }) => {
    const ref = useRef();
    const displayGridRef = useRef(displayGrid);

    useEffect(() => {
        let [w, h] = [ref.current.clientWidth, ref.current.clientHeight]
        const controller = new Space2DController(ref.current);
        const space = new Neko2D.Space();
        
        let dragCurrent = controller.camera.getPosition();
        let dragLast = controller.camera.getPosition();
        let dragged = false;

        // setCenter(controller.camera.getPosition());

        ref.current.addEventListener("mousedown", (e) => {
            dragLast = controller.camera.getPosition();
            dragged = true;
        });

        ref.current.addEventListener("mousemove", (e) => {
            if (dragged) {
                dragCurrent = controller.camera.getPosition();
                if (dragLast.x !== dragCurrent.x || dragLast.y !== dragCurrent.y) {
                    space.transform(
                        dragCurrent.x - dragLast.x,
                        dragCurrent.y - dragLast.y
                    );
                    dragLast = dragCurrent;
                    setCenter({x: space.view.x, y: space.view.y});
                }
            } else {
                // console.log(e.offsetX, e.offsetY);
            }
        });

        ref.current.addEventListener("mouseup", () => {
            dragged = false;
        });

        ref.current.addEventListener("wheel", () => {
            const scaleAttr = controller.getMeasureAttr();
            setMeasureAttr(scaleAttr);
            space.scale = scaleAttr.scale;
            console.log(space.scale);
        });

        ref.current.addEventListener("dblclick", (e) => {
            displayGridRef.current = !displayGridRef.current;
            controller.displayGrid(displayGridRef.current);
            console.log(space.scale, controller.camera.currentScale);
            console.log(space.view);
            console.log(controller.camera.getPosition());
        });
    }, [setCenter, setMeasureAttr, setSelectedPoint, axesColor, gridLinesColor]);

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