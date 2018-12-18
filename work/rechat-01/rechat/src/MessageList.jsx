import React from 'react';

const MessageList = ({
  messages
}) => {
  const messageText = messages.map(
    message => (
      <li key={message.source + message.text} className="message">
        <span className="source">{message.source}</span>
        <span className="text">{message.text}</span>
      </li>
    )
  );
  return (
    <ul className="messages">
      { messageText }
    </ul>
  );
};

export default MessageList;

