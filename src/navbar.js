import React from 'react'
import './App.css';
import iconlogo from "./images/logo.svg"

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo-hotstar">
          <img src={iconlogo}></img>
        </div>
        <div className="login">
            <button className="log-btn">Login</button>
        </div>
    </nav>
  )
}

export default Navbar