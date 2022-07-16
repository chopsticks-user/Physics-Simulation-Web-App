import PropTypes from "prop-types"

const LabelBarTop = ({center, labelSize}) => {
  return (
    <div className="label-container" id="lcx">
      <div>
        {center.x}
      </div>
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