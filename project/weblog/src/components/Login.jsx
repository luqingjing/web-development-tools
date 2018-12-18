import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../css/Login.css';

const Login = ({
  updateUsername,
  updatePassword,
  executeLogin,
  executeSignUp
}) => {

  return (
    <div id="login">
      <h3>Login / Sign Up</h3>
      <Form>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            type="text"
            placeholder="Username"
            onChange={updateUsername}
          />
        </FormGroup>
        <FormGroup controlId="formInlinePassword">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Password"
            onChange={updatePassword}
          />
        </FormGroup>
        <Button
          className="login-button"
          bsStyle="primary"
          type="submit"
          onClick={executeLogin}
        >
          Login
        </Button>
        <Button
          className="login-button"
          bsStyle="primary"
          type="submit"
          onClick={executeSignUp}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Login;