import PropTypes from "prop-types"

const LabelBarLeft = ({labelSpacing, labelSize}) => {
  return (
    <div className="label-container" id="lcy">0.00
    {/* {console.log(labelSpacing, labelSize)} */}
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