import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-left"></div>
        <div className="nav-mid">
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Skills</p>
            <p>Contact</p>
        </div>
        <div className="nav-right"></div>
      </div>
    </div>
  )
}

export default Nav
