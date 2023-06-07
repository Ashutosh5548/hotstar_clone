import './App.css';

const HomePage = ({ movies }) => {
    return (
        <div className="home-page">
            {movies.map((movie)=>(
                <div className="gallery" key={movie.id}>
                    <img src = {movie.cardImg} ></img>
                </div>
            ))}
        </div>
    );
}
 
export default HomePage;