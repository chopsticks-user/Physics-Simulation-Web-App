import PropTypes from "prop-types"
import { formatCoord3DPs } from "../../modules/neko-2d/Neko2D.module.js"

const LabelBarLeft = ({ center, selectedPoint, labelSize }) => {
  return (
    <div className="label-container" id="lcy">
      <div style={{ transform: "rotate(-90deg)" }}>
        {formatCoord3DPs(center).y}
      </div>
    </div>
  )
}

LabelBarLeft.defaultProps = {
  center: { x: 0, y: 0 },
  selectedPoint: { x: 0, y: 0 },
  lebelSize: { w: 24, h: 12 }
}

LabelBarLeft.propTypes = {
  // center: PropTypes.shape({
  //   x: PropTypes.number.isRequired,
  //   y: PropTypes.number.isRequired
  // }).isRequired, 

  // selectedPoint: PropTypes.shape({
  //   x: PropTypes.number.isRequired,
  //   y: PropTypes.number.isRequired
  // }).isRequired, 

  labelSize: PropTypes.shape({
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired
  }).isRequired
}

export default LabelBarLeft;