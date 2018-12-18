function pageStart() {
  const html = `
  <!doctype html>
  <html>
  <head></head>
  <body>
  `;
  return html;
}

function pageEnd() {
  const html = `
   </body>
   </html>
  `;
  return html;
}

function loginContent(action) {
  const html = `
  <div>
    <form action="${action}" method="GET" >
      Username:  <input name="user">
      <button type="submit">Play</button>
    </form>
   </div>
   `;
  return html;
}

function loginPage(action) {
  const html = `
  ${pageStart()}
  ${loginContent(action)}
  ${pageEnd()}
  `;
  return html;
}

function gamePage(action, turnData) {
  const html = `
  ${pageStart()}
  ${gameContent(action, turnData)}
  ${pageEnd()}
  `;
  return html;
}

function formatPrevious(previous) {
  const items = previous.map( result => `<li>${result.guess} - ${result.matching}</li>` );
  const list = items.join('\n');
  const html = `
    <ul>
    ${list}
    </ul>
  `;
  return html;
}

function gameContent(action, turnData) {
  const previous = formatPrevious(turnData.previous);
  const errorMessage = turnData.errorMessage ? `<div class="error"><span>${turnData.errorMessage}</span></div>` : '';
  const html = `
    <div class="game">
      <div class="turns">
        <span>${turnData.guessCount} guesses made</span>
      </div>
      ${errorMessage}
      <div class="previous">
        <span class="previous-title">Guess Results</span>
        ${previous}
      </div>
      <div>
        <form action="${action}" method="GET" >
          New Guess:  <input name="guess">
          <button type="submit">Guess</button>
        </form>
      </div>
     </div>
  `;
  return html;
}

module.exports = {
  gamePage,
  loginPage
};
