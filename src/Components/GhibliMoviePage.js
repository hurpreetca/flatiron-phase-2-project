import React from "react";
import GhibliMovieCollection from "./GhibliMovieCollection";
import Header from "./Header";

function GhibliMoviePage({ movies }) {
  return (
    <div>
      <Header />
      <GhibliMovieCollection movies={movies} />
    </div>
  );
}

export default GhibliMoviePage;
