import PropTypes from "prop-types"

const LabelBarLeft = ({center, selectedPoint, measureAttr}) => {
  return (
    <div className="label-container" id="lcy">
      <div style={{transform: "rotate(-90deg)"}}>
        {center.y}
      </div>
    </div>
  )
}

LabelBarLeft.defaultProps = {
  measureAttr: {scale: 1, unit: "m"}
}

LabelBarLeft.propTypes = {
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

export default LabelBarLeft;