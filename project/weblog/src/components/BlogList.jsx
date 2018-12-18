import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const BlogList = ({
  blogs
}) => {
  const blogText = blogs.map(
    blog => (
      <ListGroupItem>
        <div className="d-flex w-100 justify-content-between">
          <h4 className="mb-1">{blog.title}</h4>
          <small className="text-muted">By {blog.author}</small>
        </div>
        <p className="mb-1">{blog.content}</p>
      </ListGroupItem>
    )
  );

  return (
      <ListGroup>
        {blogText}
      </ListGroup>
  );
};

export default BlogList;