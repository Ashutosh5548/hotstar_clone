import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import iconlogo from "./images/logo.svg"

function landingpage() {
  return (
    <div className="landing">
      <img src={iconlogo} className='landing_logo'></img>
      <Link to='/home'><button className="exp-btn">Explore</button></Link>
    </div>
  );
}

export default landingpage