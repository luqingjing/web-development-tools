import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../css/AddBlog.css';

const AddBlog = ({
  updateTitle,
  updateContent,
  executeAddBlog,
  jumpToHome
}) => {

  return (
    <div className="add">
      <h3>Add New Blog</h3>
      <Form>
        <FormGroup controlId="addTitle">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            placeholder="Title"
            onChange={updateTitle}
          />
        </FormGroup>
        <FormGroup controlId="addContent">
          <ControlLabel>Content</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="Content"
            onChange={updateContent}
          />
        </FormGroup>
        <Button
          className="add-button"
          bsSize="large"
          bsStyle="primary"
          type="submit"
          onClick={executeAddBlog}
        >
          Submit
        </Button>
      </Form>
      <div className="add-goback">
        <a onClick={jumpToHome}>Go Back</a>
      </div>
    </div>
  );
};

export default AddBlog;