import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import "./GhibliMovieDetails.css";

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
    <div className="body">
      <div className="row">
        <div className="left">
          <img
            src={selectedMovie.movie_banner}
            alt="Movie Banner"
            size="medium"
          ></img>
        </div>
        <div className="right">
          <div className="content">
            <span>{selectedMovie.title}</span>
            <p>{selectedMovie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GhibliMovieDetails;
