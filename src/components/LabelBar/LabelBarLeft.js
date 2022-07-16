import PropTypes from "prop-types"

const LabelBarLeft = ({center, labelSize}) => {
  return (
    <div className="label-container" id="lcy">
      <div style={{transform: "rotate(-90deg)"}}>
        {center.y}
      </div>
    </div>
  )
}

LabelBarLeft.defaultProps = {
  labelSize: "12px"
}

LabelBarLeft.propTypes = {
  labelSpacing: PropTypes.number.isRequired, 
  labelSize: PropTypes.shape({
    w: PropTypes.number.isRequired, 
    h: PropTypes.number.isRequired
  }).isRequired
}

export default LabelBarLeft;