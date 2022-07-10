import PropTypes from "prop-types"

const LabelBarLeft = ({gridSize, fontSize}) => {
  return (
    <div className="label-container" id="lcy">0.00</div>
  )
}

LabelBarLeft.defaultProps = {
  fontSize: "10px"
}

LabelBarLeft.propTypes = {
  fontSize: PropTypes.string.isRequired, 
  gridSize: PropTypes.number.isRequired
}

export default LabelBarLeft;