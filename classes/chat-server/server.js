const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

const messages = [
  { source: 'Bob', text: 'Is this thing on?' },
  { source: 'Jane', text: 'Yes....I think?' }
];

app.get('/messages', ( request, response ) => {
  response.json(messages);
});

app.post('/messages', (request, response) => {
  const { text, source }  = request.body;
  messages.push({ source, text });
  response.json(messages);
});

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`) );
