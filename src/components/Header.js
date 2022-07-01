import PropTypes from "prop-types"

const Header = (props) => {
  return (
    <header>
      <div className="header-container">
        {/* <h1 style={{color: "red"}}>{props.title}</h1> */}
        <h1 style={headerStyle}>{props.title}</h1>
      </div>
    </header>
  )
}

const headerStyle = {
    color: "red", 
    backgroundColor: "black", 
}

Header.defaultProps = {
  title: "Header", 
}

Header.propTypes = {
  title: PropTypes.string.isRequired, 
}

export default Header