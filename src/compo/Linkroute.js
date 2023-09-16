import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Linkroute.css"

function Linkroute() {
  return (
    <div className='navbar'>
      <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/register">REGISTERR</NavLink>
      </nav>
    </div>
   
  )
}

export default Linkroute
