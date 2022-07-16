// import PropTypes from "prop-types"
import Space2D from "../Space2D"
import LabelBarTop from "../LabelBar/LabelBarTop"
import LabelBarLeft from "../LabelBar/LabelBarLeft"
import PlaneInfo from "../LabelBar/PlaneInfo"
import { useState } from "react"

const WorkSpace = () => {
  const labelSize = { w: 24, h: 12 };
  const [center, setCenter] = useState({x: 0, y: 0});
  const [measureAttr, setMeasureAttr] = useState({ scale: 1, unit: "m" });

  const format = (point) => {
    return {x: point.x.toFixed(3), y: point.y.toFixed(3)};
  }

  return (
    <div className="work-space-container">
      <LabelBarTop center={format(center)} labelSize={labelSize} />
      <LabelBarLeft center={format(center)} labelSize={labelSize} />
      <PlaneInfo measureAttr={measureAttr} />
      <Space2D setCenter={setCenter} setMeasureAttr={setMeasureAttr} />
    </div>
  )
}

WorkSpace.defaultProps = {

}

WorkSpace.propTypes = {

}

export default WorkSpace;