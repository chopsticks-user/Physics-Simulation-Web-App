import PropTypes from "prop-types"
import Space2D from "../Space2D"
import CoordX from "../Coordinate/CoordX"
import CoordY from "../Coordinate/CoordY"
import Unit from "../Coordinate/Unit"

const WorkSpace = ({backgroundColor}) => {
  return (
    <div className="work-space-container">
      <CoordX/>
      <CoordY/>
      <Unit/>
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

export default WorkSpace;