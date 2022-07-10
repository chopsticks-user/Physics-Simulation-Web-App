import PropTypes from "prop-types"
import Space2D from "../Space2D"
import LabelBarTop from "../Coordinate/LabelBarTop"
import LabelBarLeft from "../Coordinate/LabelBarLeft"
import LabelUnit from "../Coordinate/LabelUnit"

const WorkSpace = () => {
  return (
    <div className="work-space-container">
      <LabelBarTop/>
      <LabelBarLeft/>
      <LabelUnit/>
      <Space2D/>
    </div>
  )
}

WorkSpace.defaultProps = {
     
}

WorkSpace.propTypes = {
     
}

export default WorkSpace;