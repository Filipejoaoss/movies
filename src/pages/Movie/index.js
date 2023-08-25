import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import "./style.css";

function Movie() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        async function loadMovie() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "6c291e9ab019165da377dc4b91b8c673",
                }
            })
                .then((response) => {
                    setMovie(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("Movie not found!");
                    navigate("/", { replace: true });
                    return;
                })
        }

        loadMovie();

        return () => {
            console.log("Componente desmontado");
        }
    }, [navigate, id]);

    if (loading) {
        return (
            <div className="movieDetails">
                <h1>Loading Movie Details...</h1>
            </div>
        );
    }

    return (
        <div className="movieDetails">
            <h1> { movie.title } </h1>

            <img src={ `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` } alt="poster"/>

            <h3> Overview </h3>
            <span> { movie.overview } </span>

            <strong> Review: { movie.vote_average } / 10</strong>

            <div className="btnArea">
                <button> Save </button>
                <button>
                    <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Movie;