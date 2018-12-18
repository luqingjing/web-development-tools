let messages = [];
const allMessages = [];
const activeUsers = {};
let userID = 0;
let messageID = 0;

const addMessage = function({source, text}) {
  messageID = createMessageID();
  allMessages.push({source, text, messageID});
};

const messageData = function() {
  return {
    messages,
    users: Object.keys(activeUsers),
    activeUsers,
  };
};

const selectMessages = function(sinceID) {
  if (sinceID === undefined) {
    messages = allMessages;
  } else {
      messages = [];
      let num = Number.parseInt(sinceID, 10)
      if (num <= allMessages.length) {
        for (let i = num - 1; i < allMessages.length; i++) {
          messages.push(allMessages[i]);
        }
      } 
      // else {
      //   messages = allMessages;
      // }
  }
};

function userExists(username) {
  for(let key of Object.keys(activeUsers)){
    if(key === username){
      return true; 
    }
  }
  return false;
}

const deleteUser = function(username) {
   delete activeUsers[username];
}

const createUserID = function() {
  return ++userID;
};

const createMessageID = function() {
  return ++messageID;
};

const addUserID = function(username) {
  if (!userExists(username)) {
    activeUsers[username] = createUserID();
  }
  return activeUsers[username];
}

module.exports = {
  messages,
  activeUsers,
  addMessage,
  messageData,
  userExists,
  deleteUser,
  addUserID,
  selectMessages
};
