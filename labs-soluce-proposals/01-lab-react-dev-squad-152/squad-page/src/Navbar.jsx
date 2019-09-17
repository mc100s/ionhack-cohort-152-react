import React from 'react'

function Navbar(props) {
  // The Navbar CSS is following the BEM convention: http://getbem.com/naming/
  return <div className="Navbar">
    <div className="Navbar__main">Dev Squad #152</div>
    <img src="https://static.thenounproject.com/png/966948-200.png" alt="" className="Navbar__burger"/>
  </div>
}

export default Navbar