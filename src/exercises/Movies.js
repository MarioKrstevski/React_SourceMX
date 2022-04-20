import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Movie = ({ movie }) => {
  return <div className="movie">{movie.title}</div>;
};

const api = "https://yts.mx/api/v2/list_movies.json";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("");

  useEffect(function () {
    axios.get(api).then((response) => {
      console.log(response);
      setMovies(response.data.data.movies);
    });

    return () => {
      console.log(" i am unmounted");
    };
  }, [name]);

  let movieStyles = {};

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
