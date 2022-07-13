import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Space2DController } from "../../modules/t3-helper/SpaceController.mjs"
import Neko2D from "../../modules/neko-2d/test/rmp/init.mjs"
import "../../modules/neko-2d/test/rmp/cppModules.mjs"
// import "../../modules/neko-2d/test/rmp/cppModules1.mjs"

const Space2D = ({ setGridSize, setMeasureAttr, axesColor, gridLinesColor, displayAxes, displayGrid }) => {
    const ref = useRef();

    useEffect(() => {
        const controller = new Space2DController(ref.current);
        setGridSize(controller.getGridSize());

        ref.current.addEventListener("dblclick", (e) => {

        });

        ref.current.addEventListener("wheel", () => {
            setGridSize(controller.getGridSize());
            setMeasureAttr(controller.getMeasureAttr());
        });

    }, [axesColor, gridLinesColor, setGridSize, setMeasureAttr]);

    return (
        <div className="space-2d-container"
            ref={ref}>{console.log(Neko2D)}
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