import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom";

import  "./style.css";

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
       const moviesList = localStorage.getItem("@primeflix");
       setMovies(JSON.parse(moviesList) || []);
    }, []);

    function removeMovie(id) {
        let movieFilter = movies.filter((item) => {
            return (item.id !== id)
        })

        setMovies(movieFilter);
        localStorage.setItem("@primeflix", JSON.stringify(movieFilter));
    }

    return (
      <div className="myMovies">
          <h1>My Movies</h1>

          { movies.length === 0 && <span>You dont have any movie saved!</span> }

          <ul>
              { movies.map((item) => {
                  return (
                      <li key={item.id}>
                          <span> { item.title } </span>
                          <div>
                              <Link to={`/movie/${item.id}`}> See Details </Link>
                              <button onClick={() => removeMovie(item.id)} >Remove</button>
                          </div>
                      </li>
                  );
              })}
          </ul>

      </div>
    );
}

export default Favorites;