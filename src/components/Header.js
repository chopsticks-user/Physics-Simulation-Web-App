import PropTypes from "prop-types"

const Header = (props) => {
  return (
    <div className="header-container">

    </div>
  )
}

Header.defaultProps = {
  title: "Header", 
}

Header.propTypes = {
  title: PropTypes.string.isRequired, 
}

export default Header