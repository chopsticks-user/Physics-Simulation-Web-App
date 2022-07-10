import PropTypes from "prop-types"

const LabelBarTop = ({labelSpacing, labelSize}) => {
  return (
    <div className="label-container" id="lcx">
      <p>0.00</p>
      {/* {console.log(labelSpacing, labelSize)} */}
    </div>
  )
}

LabelBarTop.defaultProps = {
  labelSize: "10px"
}

LabelBarTop.propTypes = {
  labelSpacing: PropTypes.number.isRequired, 
  labelSize: PropTypes.shape({
    w: PropTypes.number.isRequired, 
    h: PropTypes.number.isRequired
  }).isRequired
}

export default LabelBarTop;