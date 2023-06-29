import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";

function NewMovieForm() {
  return (
    <div>
      <Segment inverted>
        <Form inverted>
          <Form.Group widths="equal">
            <Form.Input fluid label="Title" placeholder="Title" />
            <Form.Input
              fluid
              label="Original Title"
              placeholder="Original Title Japanese"
            />
            <Form.Input
              fluid
              label="Original Title Romanised"
              placeholder="Original Title Romanised"
            />
            <Form.Input fluid label="Movie Image" placeholder="Movie Image" />
            <Form.Input fluid label="Movie Banner" placeholder="Movie Banner" />
            <Form.Input fluid label="Director" placeholder="Director Name" />
            <Form.Input fluid label="Producer" placeholder="Producer Name" />
            <Form.Input fluid label="Release Year" placeholder="Release Year" />
            <Form.Input fluid label="Running Time" placeholder="Running Time" />
            <Form.Input fluid label="Rating" placeholder="Rating" />
          </Form.Group>
          <Form.TextArea
            label="Description"
            placeholder="Tell us more about movie..."
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Segment>
    </div>
  );
}

export default NewMovieForm;
