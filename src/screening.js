import React from 'react'
import './App.css';
import { CiPlay1 } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

function Screening() {
  return (
    <div className="moviescreening">
        <div className="extra">
          <div className="movie-btns">
          <button className="play-btn"><FaPlay></FaPlay> Play</button>
          <button className="trailer-btn"><FaPlay className="play-black"></FaPlay>Trailer</button>
          <button className="plus-btn"><BsPlusLg /></button>
          </div>
          <div className="description">
            <h6>
              2015 • 1h 35m • Coming of Age, Family, Animation
            </h6>
            <h5>
              When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition .<br></br> Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost,<br></br> they must journey through unfamiliar places to get back home.
            </h5>
          </div>
        </div>
    </div>
  );
}

export default Screening;