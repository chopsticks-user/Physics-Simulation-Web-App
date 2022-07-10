import PropTypes from "prop-types"

const LabelUnit = ({sciNotation, unit}) => {
  return (
    <div className="label-container" id="lcu">
        <p>{sciNotation}</p>
        <p>{unit}</p>
    </div>
  )
}

LabelUnit.defaultProps = {
  sciNotation: "e0", 
  unit: "m"
}

LabelUnit.propTypes = {
  sciNotation: PropTypes.string.isRequired, 
  unit: PropTypes.string.isRequired
}

export default LabelUnit;