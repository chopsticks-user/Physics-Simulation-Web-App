import PropTypes from "prop-types"
import Space2D from "../Space2D"
import Coordinate from "../Coordinate"

const WorkSpace = ({backgroundColor}) => {
  return (
    <div className="work-space-container" 
         style={{
          backgroundColor: backgroundColor, 
         }}
    >
      <Space2D/>
    </div>
  )
}

WorkSpace.defaultProps = {
    backgroundColor: "black", 
}

WorkSpace.propTypes = {
    backgroundColor: PropTypes.string.isRequired, 
}

export default WorkSpace