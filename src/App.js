import "./App.css";
import GhibliMoviePage from "./Components/GhibliMoviePage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NewMovieForm from "./Components/NewMovieForm/NewMovieForm";
import React, { useEffect, useState } from "react";
import GhibliMovieDetails from "./Components/GhibliMovieDetails";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((movie) => setMovies(movie));
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/movies">
          <GhibliMoviePage movies={movies} />
        </Route>
        <Route exact path="/movies/:id">
          <GhibliMovieDetails />
        </Route>
        <Route exact path="/form">
          <NewMovieForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
