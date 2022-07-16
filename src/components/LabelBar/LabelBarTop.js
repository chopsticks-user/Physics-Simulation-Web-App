import PropTypes from "prop-types"
import Neko2D from "../../modules/neko-2d/index.mjs"

const LabelBarTop = ({center, selectedPoint, labelSize}) => {
  return (
    <div className="label-container" id="lcx">
      <div>
        {Neko2D.formatCoord3DPs(center).x}
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