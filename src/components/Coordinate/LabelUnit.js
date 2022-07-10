import PropTypes from "prop-types"

const LabelUnit = ({measureAttr}) => {
  return (
    <div className="label-container" id="lcu">
        <p>e{Math.floor(Math.log10(measureAttr.scale)) + 1}</p>
        <p>{measureAttr.unit}</p>
        {/* {console.log(measureAttr.scale)} */}
    </div>
  )
}

LabelUnit.defaultProps = {
  measureAttr: {scale: 1, unit: "m"}
}

LabelUnit.propTypes = {
  measureAttr: PropTypes.shape({
    scale: PropTypes.number.isRequired, 
    unit: PropTypes.string.isRequired
  }).isRequired
}

export default LabelUnit;