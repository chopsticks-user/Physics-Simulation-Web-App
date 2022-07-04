import PropTypes from "prop-types"
import Space2D from "../Space2D"

const WorkSpace = (props) => {
  return (
    <div className="work-space-container">
      <Space2D/>
    </div>
  )
}

WorkSpace.defaultProps = {
    title: "WorkSpace", 
}

WorkSpace.propTypes = {
    title: PropTypes.string.isRequired, 
}

export default WorkSpace