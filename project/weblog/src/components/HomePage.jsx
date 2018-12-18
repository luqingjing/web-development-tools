import React from 'react';
import BlogList from "./BlogList";
import Login from "./Login";
import Logined from "./Logined";
import ErrorField from "./ErrorField"
import {
  Jumbotron,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';
import '../css/HomePage.css';

const HomePage = ({
  blogs,
  username,
  isLoggedIn,
  executeLogin,
  executeSignUp,
  updateUsername,
  updatePassword,
  jumpToAddPage,
  jumpToPersonal,
  errorMessage
                  }) => {
  return (
    <div className="container">
      <Row>
      <Jumbotron>
        <h1>Welcome To WeBlog!</h1>
      </Jumbotron>
      </Row>
      <Row>
        { !!errorMessage && <ErrorField errorMessage={errorMessage}/>}
      </Row>
      <Row>
      <Grid id="homepage">
        <Col id="bloglist" xs={9}>
          <BlogList blogs={blogs}/>
        </Col>
        <Col id="user" xs={3}>
          { isLoggedIn || <Login
            executeLogin={executeLogin}
            executeSignUp={executeSignUp}
            updateUsername={updateUsername}
            updatePassword={updatePassword}
          /> }
          { isLoggedIn && <Logined
            username={username}
            jumpToAddPage={jumpToAddPage}
            jumpToPersonal={jumpToPersonal}
          /> }
        </Col>
      </Grid>
      </Row>
    </div>
  );
};

export default HomePage;