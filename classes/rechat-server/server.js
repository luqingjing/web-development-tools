const express = require('express');
const bodyParser = require('body-parser');
const chat = require('./server/chat');
const app = express();
const PORT = 4000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/messages', ( request, response ) => {
  response.json(chat.messageData());
});

app.post('/messages', (request, response) => {
  const { text, source } = request.body;
  chat.addMessage({ text, source });
  response.json(chat.messageData());
});

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`) );
