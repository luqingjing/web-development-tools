import React from 'react';

const Logout = ({
  username,
  executeLogout
}) => {

  return (
    <div className="logout-controls">
      <button onClick={() => executeLogout(username)}>Logout</button>
    </div>
  );
};

export default Logout;
