import PropTypes from "prop-types"
import React from "react"

const Header = (props) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const cur = ref.current;
    cur.addEventListener("mousewheel", (e) => {
      alert(e.clientX);
    });
  })

  return (
    <div className="header-container" ref={ref}>

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