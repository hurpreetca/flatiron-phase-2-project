import React from "react";
import { Card } from "semantic-ui-react";
import GhibliMovieCard from "./GhibliMovieCard";

function GhibliMovieCollection({ movies }) {
  const displayMovieCollection = movies.map((movie) => {
    return (
      <GhibliMovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        original_title={movie.original_title}
        image={movie.image}
      />
    );
  });
  return <Card.Group itemsPerRow={5}>{displayMovieCollection}</Card.Group>;
}

export default GhibliMovieCollection;
