import React from 'react';
import Login from './Login';
import MessageEntry from './MessageEntry';

const Controls = ({
  isLoggedIn,
  updatePendingMessage,
  message,
  sendMessage,
  updatePendingUsername,
  username,
  executeLogin
}) => {
  return (
    <div className="active-area">
      { isLoggedIn || <Login
        updatePendingUsername={updatePendingUsername}
        username={username}
        executeLogin={executeLogin}
      /> }
      { isLoggedIn && <MessageEntry
          sendMessage={sendMessage }
          message={message}
          updatePendingMessage={ updatePendingMessage }
      /> }
      <div>Status Line</div>
    </div>
  );
};

export default Controls;
