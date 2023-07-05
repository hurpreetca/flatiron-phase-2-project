import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import "./GhibliMovieDetails.css";
import { Grid, Image, Card, Icon } from "semantic-ui-react";

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
    <Grid>
      <Grid.Column width={1}></Grid.Column>
      <Grid.Column width={4}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Image src={selectedMovie.movie_banner} size="massive" circular />
      </Grid.Column>
      <Grid.Column width={6}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Card centered raised color="red">
          <Card className="movie-detail-card" color="violet">
            <Card.Content>
              <br />
            </Card.Content>
            <Card.Header textAlign="center">
              <Icon disabled name="video camera" size="big" color="blue" />
              <b className="movie-detail-name">{selectedMovie.title}</b>
              <br />
              {selectedMovie.original_title}
              <br />
              <br />
              <br />
            </Card.Header>
          </Card>
          <Card color="purple">
            <Card.Header textAlign="center">
              <br />
              <b>Directed By: {selectedMovie.director}</b>
              <br />
              <b>Produced By: {selectedMovie.producer}</b>
              <br />
              <br />
            </Card.Header>
          </Card>
          <Card color="blue">
            <Card.Content>
              <b>{selectedMovie.description}</b>
            </Card.Content>
          </Card>
        </Card>
      </Grid.Column>
      <Grid.Column width={4}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Image src={selectedMovie.image} size="large" circular />
      </Grid.Column>
    </Grid>

    // <div className="body">
    //   <div className="row">
    //     <div className="left">
    //       <img
    //         src={selectedMovie.movie_banner}
    //         alt="Movie Banner"
    //         size="medium"
    //       ></img>
    //     </div>
    //     <div className="right">
    //       <div className="content">
    //         <span>{selectedMovie.title}</span>
    //         <p>{selectedMovie.description}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default GhibliMovieDetails;
