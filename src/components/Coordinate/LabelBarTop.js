import PropTypes from "prop-types"

const LabelBarTop = (gridSize, fontSize) => {
  return (
    <div className="label-container" id="lcx">0.00</div>
  )
}

LabelBarTop.defaultProps = {
  fontSize: "10px"
}

LabelBarTop.propTypes = {
  fontSize: PropTypes.string.isRequired, 
  gridSize: PropTypes.number.isRequired
}

export default LabelBarTop;