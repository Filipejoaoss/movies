import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import "./style.css";

//Url: https://api.themoviedb.org/3/movie/now_playing?api_key=6c291e9ab019165da377dc4b91b8c673

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "6c291e9ab019165da377dc4b91b8c673",
                    page:1,
                }
            })

            //console.log(response.data.results);
            setMovies(response.data.results);
            setLoading(false);
        }

        loadMovies();

    }, []);

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading Movies...</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="moviesList">
                { movies.map( (movie) => {
                    return (
                      <article key={ movie.id }>
                          <strong> { movie.title } </strong>
                          <img src={ `https://image.tmdb.org/t/p/original/${movie.poster_path}` } alt="poster"/>
                          <Link to={`/movie/${movie.id}`}> Details </Link>
                      </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;