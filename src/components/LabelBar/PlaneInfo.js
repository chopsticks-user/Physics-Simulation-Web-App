import PropTypes from "prop-types"

const PlaneInfo = ({measureAttr}) => {
  return (
    <div className="label-container" id="lcpi">
        <p>e{Math.floor(Math.log10(measureAttr.scale)) + 1}</p>
    </div>
  )
}

PlaneInfo.defaultProps = {
  measureAttr: {scale: 1, unit: "m"}
}

PlaneInfo.propTypes = {
  measureAttr: PropTypes.shape({
    scale: PropTypes.number.isRequired, 
    unit: PropTypes.string.isRequired
  }).isRequired
}

export default PlaneInfo;