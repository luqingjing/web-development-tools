import React from 'react';

const MessageEntry = ({
  updatePendingMessage,
  message,
  sendMessage
}) => {
  return (
    <div className="message-controls">
      <input
        onChange={updatePendingMessage}
        onKeyDown={ (e) => {
          if(e.key === 'Enter') {
            sendMessage();
          }
        } }
        className="new-message"
        placeholder="Enter Message"
        value={message}
      />
      <button onClick={sendMessage} className="send-message">Send</button>
    </div>
  );
};

export default MessageEntry;
