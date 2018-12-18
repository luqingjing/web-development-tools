import React from 'react';

const Login = ({
  updatePendingUsername,
  username,
  executeLogin
}) => {

  const loginOnEnter = e => {
    if(e.key === 'Enter') {
      executeLogin();
    }
  };

  return (
    <div className="login-controls">
      <input
        className="username"
        placeholder="Your user name"
        onChange={ updatePendingUsername }
        onKeyDown={ loginOnEnter }
        value={username}
      />
      <button onClick={executeLogin}>Login</button>
    </div>
  );
};

export default Login;
