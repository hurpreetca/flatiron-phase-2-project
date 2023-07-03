import "./App.css";
import GhibliMoviePage from "./Components/GhibliMoviePage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NewMovieForm from "./Components/NewMovieForm/NewMovieForm";
import React, { useEffect, useState } from "react";
import GhibliMovieDetails from "./Components/GhibliMovieDetail/GhibliMovieDetails";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((movie) => setMovies(movie));
  }, []);
  function onNewMovieSubmit(newMovie) {
    setMovies([...movies, newMovie]);
  }
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <GhibliMoviePage movies={movies} />
        </Route>
        <Route exact path="/movies/:id">
          <GhibliMovieDetails />
        </Route>
        <Route exact path="/form">
          <NewMovieForm onNewMovieSubmit={onNewMovieSubmit} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
