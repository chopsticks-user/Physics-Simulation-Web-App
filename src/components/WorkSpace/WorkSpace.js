// import PropTypes from "prop-types"
import Space2D from "../Space2D"
import LabelBarTop from "../LabelBar/LabelBarTop"
import LabelBarLeft from "../LabelBar/LabelBarLeft"
import PlaneInfo from "../LabelBar/PlaneInfo"
import { useState } from "react"

const WorkSpace = () => {
  const [center, setCenter] = useState({x: 0, y: 0});
  const [measureAttr, setMeasureAttr] = useState({ scale: 1, unit: "m" });
  const [selectedPoint, setSelectedPoint] = useState({x: 0, y: 0});

  return (
    <div className="work-space-container">
      <LabelBarTop
        center={center} 
        selectedPoint = {selectedPoint} 
        measureAttr={measureAttr}
      />
      <LabelBarLeft
        center={center} 
        selectedPoint = {selectedPoint} 
        measureAttr={measureAttr}
      />
      <PlaneInfo measureAttr={measureAttr} />
      <Space2D 
        setCenter={setCenter} 
        setMeasureAttr={setMeasureAttr} 
        setSelectedPoint={setSelectedPoint} 
      />
    </div>
  )
}

WorkSpace.defaultProps = {

}

WorkSpace.propTypes = {

}

export default WorkSpace;