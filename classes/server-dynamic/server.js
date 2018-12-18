const express = require('express');
const game = require('./game');
const gameHtml = require('./game-html');

const app = express();

const loginUrl = '/login';
// Note: The server and gameHtml aren't as separate as they could be
// the query parameter names have to be known to both
// Do you see a way to not need that?

app.get('/', (request, response) => {
  const html = gameHtml.loginPage(loginUrl);
  response.send(html);
});

app.get(loginUrl, (request, response) => {
  const user = request.query.user;
  response.redirect(`/games/${user}`);
});

app.get('/games/:user', (request, response) => {
  const user = request.params.user;
  const guess = request.query.guess;
  const turnData = game.takeTurn({ user, guess });
  const gameUrl = `/games/${user}`;
  const html = gameHtml.gamePage(gameUrl, turnData);
  response.send(html);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

