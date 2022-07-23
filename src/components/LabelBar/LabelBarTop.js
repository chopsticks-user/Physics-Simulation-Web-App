import PropTypes from "prop-types"
import { formatCoord3DPs } from "../../modules/neko-2d/Neko2D.module.js"

const LabelBarTop = ({center, selectedPoint, labelSize}) => {
  return (
    <div className="label-container" id="lcx">
      <div>
        {formatCoord3DPs(center).x}
      </div>
    </div>
  )
}

LabelBarTop.defaultProps = {
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

export default LabelBarTop;