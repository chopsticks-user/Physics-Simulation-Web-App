// import PropTypes from "prop-types"
import Space2D from "../Space2D"
import LabelBarTop from "../LabelBar/LabelBarTop"
import LabelBarLeft from "../LabelBar/LabelBarLeft"
import LabelUnit from "../LabelBar/LabelUnit"
import { useState } from "react"

const WorkSpace = () => {
  const labelSize = { w: 20, h: 10 };
  const [gridSize, setGridSize] = useState(0);
  const [measureAttr, setMeasureAttr] = useState({ scale: 1, unit: "m" });

  return (
    <div className="work-space-container">
      {/* {console.log(gridSize)} */}
      <LabelBarTop labelSpacing={gridSize - labelSize.w} labelSize={labelSize} />
      <LabelBarLeft labelSpacing={gridSize - labelSize.h} labelSize={labelSize} />
      <LabelUnit measureAttr={measureAttr} />
      <Space2D setGridSize={setGridSize} setMeasureAttr={setMeasureAttr} />
    </div>
  )
}

WorkSpace.defaultProps = {

}

WorkSpace.propTypes = {

}

export default WorkSpace;