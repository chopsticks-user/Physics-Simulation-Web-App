import PropTypes from "prop-types"

const Plane = (props) => {
  return (
    <div className="plane-container">
      <svg className="plane-renderer">
        
      </svg>
    </div>
  )
}

Plane.defaultProps = {
    title: "Plane", 
}

Plane.propTypes = {
    title: PropTypes.string.isRequired, 
}

export default Plane