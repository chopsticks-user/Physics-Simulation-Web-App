import PropTypes from "prop-types"

const Plane = (props) => {
  return (
    <main>
        <div className="plane-container">
            {/* <h1 style={{color: "blue"}}>{props.title}</h1> */}
            <h1 style={planeStyle}>{props.title}</h1>
        </div>
    </main>
  )
}

const planeStyle = {
    color: "blue", 
    backgroundColor: "black", 
}

Plane.defaultProps = {
    title: "Plane", 
}

Plane.propTypes = {
    title: PropTypes.string.isRequired, 
}

export default Plane