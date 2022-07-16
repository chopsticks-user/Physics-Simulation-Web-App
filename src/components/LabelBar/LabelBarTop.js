import PropTypes from "prop-types"
import { useEffect, useState, useRef } from "react"

const LabelBarTop = ({center, selectedPoint, measureAttr}) => {
  

  return (
    <div className="label-container" id="lcx">
      <div>
        {center.x}
      </div>
    </div>
  )
}

LabelBarTop.defaultProps = {
  measureAttr: {scale: 1, unit: "m"}
}

LabelBarTop.propTypes = {
  center: PropTypes.shape({
    x: PropTypes.number.isRequired, 
    y: PropTypes.number.isRequired
  }).isRequired, 
  selectedPoint: PropTypes.shape({
    x: PropTypes.number.isRequired, 
    y: PropTypes.number.isRequired
  }).isRequired, 
  measureAttr: PropTypes.shape({
    scale: PropTypes.number.isRequired, 
    unit: PropTypes.string.isRequired
  }).isRequired
}

export default LabelBarTop;