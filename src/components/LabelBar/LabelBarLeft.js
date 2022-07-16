import PropTypes from "prop-types"

const LabelBarLeft = ({selectedPoint, labelSize}) => {
  return (
    <div className="label-container" id="lcy">
      <div style={{transform: "rotate(-90deg)"}}>
        {selectedPoint.y}
      </div>
    </div>
  )
}

LabelBarLeft.defaultProps = {
  labelSize: "10px"
}

LabelBarLeft.propTypes = {
  labelSpacing: PropTypes.number.isRequired, 
  labelSize: PropTypes.shape({
    w: PropTypes.number.isRequired, 
    h: PropTypes.number.isRequired
  }).isRequired
}

export default LabelBarLeft;