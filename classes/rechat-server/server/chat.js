const messages = [];

const activeUsers = {};

const addMessage = function({ text, source }) {
  messages.push({ source, text });
  activeUsers[source] = true;
};

const messageData = function() {
  return {
    messages,
    users: Object.keys(activeUsers)
  };
};

module.exports = {
  messages,
  addMessage,
  messageData
};
