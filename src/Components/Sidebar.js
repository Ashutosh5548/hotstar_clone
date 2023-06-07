import React from 'react'
import '../App.css';
import { AiFillHome } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { LuMonitor } from "react-icons/lu";
import { TbBrandDisney } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="side-bar">
      <div><button className="dis-btn"><TbBrandDisney/></button></div>
      <div><button className="home-btn"><AiFillHome/></button></div>
      <div><button className="search-btn"><LuSearch/></button></div>
      <Link to='/home/movie'><div><button className="tv-btn"><LuMonitor/></button></div></Link>
    </div>
  )
}

export default Sidebar;