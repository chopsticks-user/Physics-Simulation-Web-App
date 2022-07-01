import PropTypes from "prop-types"
import Render from "./Render.js"

const Plane = (props) => {
  return (
    <div className="plane-container">
      <Render/>
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