import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import Footer from "./footer";
import Sidebar from "./Components/Sidebar";
import './App.css';
import imag from './images/slider-badag.jpg'

const Home = () => {

    const [movies, setMovie] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/movies')
        .then(res =>{
            return res.json();
        })
        .then(data => {
            setMovie(data);
        });
    },[]);

    return (
        <div className="home">
            <Sidebar></Sidebar>
            <div className="home1">
            <img src= {imag} className="slider-1"></img>
                {movies && <HomePage movies={movies}/>}
                <Footer></Footer>
            </div>
        </div>
    );
}
 
export default Home;