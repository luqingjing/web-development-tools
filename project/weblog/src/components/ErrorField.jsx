import React from 'react';
import {
  Alert
} from 'react-bootstrap';

const ErrorField = ({
  errorMessage,
}) => {
return (
  <Alert bsStyle="danger">
    <strong>{errorMessage}</strong>
  </Alert>
  );
};

export default ErrorField;