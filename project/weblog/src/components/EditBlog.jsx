import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../css/AddBlog.css';

const EditBlog = ({
  targetBlog,
  updateTitle,
  updateContent,
  executeEditBlog,
  jumpToHome
}) => {

  return (
    <div className="add">
      <h3>Edit Blog</h3>
      <Form>
        <FormGroup controlId="editTitle">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            placeholder="Title"
            onChange={updateTitle}
            defaultValue={targetBlog.title}
          />
        </FormGroup>
        <FormGroup controlId="editContent">
          <ControlLabel>Content</ControlLabel>
          <div>
          <FormControl
            componentClass="textarea"
            placeholder="Content"
            onChange={updateContent}
            defaultValue={targetBlog.content}
          />
          </div>
        </FormGroup>
        <Button
          className="add-button"
          bsSize="large"
          bsStyle="primary"
          type="submit"
          onClick={executeEditBlog}
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

export default EditBlog;