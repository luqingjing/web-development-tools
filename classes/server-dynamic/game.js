const games = {};

function checkForNewGame(user) {
  if(!games[user]) {
    createNewGame(user);
  }
}

function createNewGame(user) {
  games[user] = {
    word: 'guess',
    previous: [],
    guessed: {}
  };
  return games[user];
}

function countMatching({ user, guess }) {
  let matching = 0;
  for(let i = 0; i < guess.length; i++) {
    if(guess[i].toLowerCase() === games[user].word[i].toLowerCase()) {
      matching += 1;
    }
  };
  return matching;
}

function recordGuess({ user, guess, matching }) {
  games[user].previous.push({guess, matching});
  games[user].guessed[guess.toLowerCase()] = true;
}

function getPreviousGuesses(user) {
  return games[user].previous;
}

function makeGuess({ user, guess }) {
  if(checkForInvalidGuess({ user, guess })) {
    return;
  }

  if(guess && !games[user].guessed[guess.toLowerCase()]) {
    const matching = countMatching({user, guess});
    recordGuess({ user, guess, matching });
  }
}

function takeTurn({ user, guess }) {
  const turnData = {};
  checkForNewGame(user);
  turnData.errorMessage = checkForInvalidGuess({ user, guess });
  makeGuess({ user, guess });
  turnData.previous = getPreviousGuesses(user);
  turnData.guessCount = turnData.previous.length;
  return turnData;
}

function checkForInvalidGuess({ user, guess }) {
  if(!guess) { return ''; }

  const isLengthOk = guess.length === games[user].word.length;
  const wasGuessed = games[user].guessed[guess.toLowerCase()];

  if(!isLengthOk) { return 'Your guess must be exactly 5 letters'; }
  if(wasGuessed) { return 'You already guessed that word'; }

  return '';
}

module.exports = {
  checkForNewGame,
  takeTurn
};
