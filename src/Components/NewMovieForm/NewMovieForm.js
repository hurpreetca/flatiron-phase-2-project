import React, { useState, Component } from "react";
import { Segment, Form } from "semantic-ui-react";
import "./NewMovieForm.css";

function NewMovieForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    original_title: "",
    original_title_romanised: "",
    image: "",
    movie_banner: "",
    description: "",
    director: "",
    producer: "",
    release_year: "",
    running_time: "",
    rt_score: "",
  });
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovieData = {
      title: formData.title,
      original_title: formData.original_title,
      original_title_romanised: formData.original_title_romanised,
      image: formData.image,
      movie_banner: formData.movie_banner,
      description: formData.description,
      director: formData.director,
      producer: formData.producer,
      release_year: formData.release_year,
      running_time: formData.running_time,
      rt_score: formData.rt_score,
    };
    console.log(newMovieData);
  };
  return (
    <div>
      <Segment inverted>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            fluid
            label="Title"
            placeholder="Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Original Title"
              placeholder="Original Title Japanese"
              type="text"
              name="original_title"
              value={formData.original_title}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Original Title Romanised"
              placeholder="Original Title Romanised"
              type="text"
              name="original_title_romanised"
              value={formData.original_title_romanised}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Movie Image"
              placeholder="Movie Image"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Movie Banner"
              placeholder="Movie Banner"
              type="text"
              name="movie_banner"
              value={formData.movie_banner}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.TextArea
            label="Description"
            placeholder="Tell us more about movie..."
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Director"
              placeholder="Director Name"
              type="text"
              name="director"
              value={formData.director}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Producer"
              placeholder="Producer Name"
              type="text"
              name="producer"
              value={formData.producer}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Release Year"
              placeholder="Release Year"
              type="number"
              name="release_year"
              value={formData.release_year}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Running Time"
              placeholder="Running Time"
              type="number"
              name="running_time"
              value={formData.running_time}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Rating"
              placeholder="Rating"
              type="number"
              name="rt_score"
              value={formData.rt_score}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </Segment>
    </div>
  );
}

export default NewMovieForm;
