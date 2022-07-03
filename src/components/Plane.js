import PropTypes from "prop-types"
import Space2D from "./Space-2D.js"

const Plane = (props) => {
  return (
    <div className="plane-container">
      <Space2D/>
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