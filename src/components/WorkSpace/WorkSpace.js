// import PropTypes from "prop-types"
import Space2D from "../Space2D"
import LabelBarTop from "../LabelBar/LabelBarTop"
import LabelBarLeft from "../LabelBar/LabelBarLeft"
import PlaneInfo from "../LabelBar/PlaneInfo"
import { useState } from "react"

const WorkSpace = () => {
  const labelSize = { w: 24, h: 12 };
  const [selectedPoint, setSelectedPoint] = useState({x: 0, y: 0});
  const [measureAttr, setMeasureAttr] = useState({ scale: 1, unit: "m" });

  return (
    <div className="work-space-container">
      <LabelBarTop selectedPoint={selectedPoint} labelSize={labelSize} />
      <LabelBarLeft selectedPoint={selectedPoint} labelSize={labelSize} />
      <PlaneInfo measureAttr={measureAttr} />
      <Space2D setSelectedPoint={setSelectedPoint} setMeasureAttr={setMeasureAttr} />
    </div>
  )
}

WorkSpace.defaultProps = {

}

WorkSpace.propTypes = {

}

export default WorkSpace;