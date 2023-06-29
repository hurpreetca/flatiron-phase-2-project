import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

function GhibliMovieDetails() {
  let { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});
  console.log("Running mvies Details" + id);
  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => res.json())
      .then((movie) => setSelectedMovie(movie));
  }, [id]);
  return (
    <div>
      <h1> {selectedMovie.title}</h1>
      <img src={selectedMovie.movie_banner} alt="Movie Banner"></img>
    </div>
  );
}

export default GhibliMovieDetails;
