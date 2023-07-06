import React from "react";
import { Card } from "semantic-ui-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function GhibliMovieCard({ id, title, original_title, image }) {
  const history = useHistory();
  function handleClick(id) {
    history.push(`/movies/${id}`);
  }

  return (
    <Card
      className="movie-card"
      color="red"
      key={id}
      onClick={(e) => handleClick(id)}
    >
      <img src={image} alt="Oh Snap!" />
      <Card.Content className="movie-card-content">
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span>{original_title}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default GhibliMovieCard;
