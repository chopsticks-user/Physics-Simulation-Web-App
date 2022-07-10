// import PropTypes from "prop-types"
import Space2D from "../Space2D"
import LabelBarTop from "../Coordinate/LabelBarTop"
import LabelBarLeft from "../Coordinate/LabelBarLeft"
import LabelUnit from "../Coordinate/LabelUnit"
import {useState, useEffect, useRef} from "react"

const WorkSpace = () => {
  const labelSize = { w: 20, h: 10 };
  const [gridSize, setGridSize] = useState(0);

  return (
    <div className="work-space-container">
      {console.log(gridSize)}
      <LabelBarTop labelSpacing={gridSize - labelSize.w} labelSize={labelSize}/>
      <LabelBarLeft labelSpacing={gridSize - labelSize.h} labelSize={labelSize}/>
      <LabelUnit />
      <Space2D setGridSize={setGridSize} />
    </div>
  )
}

WorkSpace.defaultProps = {

}

WorkSpace.propTypes = {

}

export default WorkSpace;