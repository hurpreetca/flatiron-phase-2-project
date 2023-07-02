import React from "react";
import GhibliMovieCollection from "./GhibliMovieCollection";

function GhibliMoviePage({ movies }) {
  return (
    <div>
      <GhibliMovieCollection movies={movies} />
    </div>
  );
}

export default GhibliMoviePage;
