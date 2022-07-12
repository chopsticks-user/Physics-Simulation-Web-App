import React from 'react'
import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Space2DController } from "../../modules/t3-helper/SpaceController.mjs"

const Canvas = ({ setGridSize, setMeasureAttr, axesColor, gridLinesColor, displayAxes, displayGrid }) => {
  const ref = useRef();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      // let w = ref.current.clientWidth;
      // let h = ref.current.clientHeight;
      const controller = new Space2DController(ref.current);
      setGridSize(controller.getGridSize());

      ref.current.addEventListener("dblclick", (e) => {

      });

      ref.current.addEventListener("wheel", () => {
        setGridSize(controller.getGridSize());
        setMeasureAttr(controller.getMeasureAttr());
      });
    } else {
      isMounted.current = true;
    }

  }, [axesColor, gridLinesColor, setGridSize, setMeasureAttr]);
  return (
    <div className="canvas" ref={ref}></div>
  )
}

Canvas.defaultProps = {
  axesColor: "red",
  gridLinesColor: "#4f4f4f",
  displayGrid: true,
  displayAxes: true,
}

Canvas.propTypes = {
  axesColor: PropTypes.string.isRequired,
  gridLinesColor: PropTypes.string.isRequired,
  displayGrid: PropTypes.bool.isRequired,
  displayAxes: PropTypes.bool.isRequired,
}

export default Canvas