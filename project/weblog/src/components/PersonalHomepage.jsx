import React from 'react';
import { ListGroup, ListGroupItem, Button, ButtonToolbar } from 'react-bootstrap';
import '../css/PersonalHomepage.css';
import {
  getOneBlog,
} from "../services";

const PersonalHomepage = ({
  username,
  personalBlogs,
  jumpToEditPage,
  deleteBlog
}) => {
  const personalBlogText = personalBlogs.map(
    function(personalBlog){
      const editTargetBlog = function() {
        const targetBlog = getOneBlog(username, personalBlog.blogID);
        targetBlog.then(function(value){
          // console.log(value);
          jumpToEditPage(value);
        });
      };

      const deleteTargetBlog = function() {
        const targetBlog = getOneBlog(username, personalBlog.blogID);
        targetBlog.then(function(value){
          console.log(value);
          deleteBlog(value);
        });
      };

      return (
        <ListGroupItem id={personalBlog.blogID}>
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-1">{personalBlog.title}</h4>
            <small className="text-muted">By {personalBlog.author}</small>
          </div>
          <p className="mb-1">{personalBlog.content}</p>
          <ButtonToolbar>
            <Button onClick={editTargetBlog} bsSize="small"
                    bsStyle="warning">Edit</Button>
            <Button onClick={deleteTargetBlog} bsSize="small"
                    bsStyle="danger">Delete</Button>
          </ButtonToolbar>
        </ListGroupItem>
      )
    }
  );

  return (
    <div id="personal" className="container">
      <h1>{username}'s Blog</h1>
      <ListGroup>
        {personalBlogText}
      </ListGroup>
    </div>
  );
};

export default PersonalHomepage;