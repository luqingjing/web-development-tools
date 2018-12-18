const express = require('express');
const bodyParser = require('body-parser');
const chat = require('./server/chat');
const app = express();
const PORT = 4000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/messages/:since?', ( request, response ) => {
	const sinceID = request.params.since;
	chat.selectMessages(sinceID);
  response.json(chat.messageData());
  // response.json(Number.parseInt(sinceID, 10));
});

// app.get('/messages/:since?', ( request, response ) => {
// 	const sinceID = request.params.since;
//   response.json(chat.selectedMessages(sinceID));
// });

app.post('/messages', (request, response) => {
  const {source, text} = request.body;
  chat.addMessage({source, text});
  response.json(chat.messageData());
});

app.get('/session/:username', (request, response) => {
  const username = request.params.username;
  const userID = chat.activeUsers[username];
  response.json({id: userID});
});

app.post('/session/:username', (request, response) => {
  const username = request.params.username;
  const userID = chat.addUserID(username);
  response.json({id: userID});
});

app.delete('/session/:username', (request, response) => {
  const username = request.params.username;
  if(chat.userExists(username)){
    chat.deleteUser(username);
    const allUsers = Object.keys(chat.activeUsers);
    response.json(allUsers);
  }
  else{
    response.status(404).end();
  }
})

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`) );

//send the username to the server when they login (as a POST) to the /session/:username endpoint
