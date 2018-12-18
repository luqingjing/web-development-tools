// IIFE
( function IIFE() {
  const activeUsers = [];
  let messages = [];

  function generateMessageHtml( messages ) {
    let html = '';
    messages.forEach( message => {
      html += `
        <li class="message"><span class="source">${message.source}</span><span class="text">${message.text}</span></li>`;
    });
    return html;
  }

  function renderMessages( messages ) {
    // generate the HTML
    const html = generateMessageHtml(messages);
    // replace the HTML
    document.querySelector('.messages').innerHTML = html;
  }

  function sendMessage( text ) {
    fetch(`/messages`, {
      method: 'POST',
      body: JSON.stringify( { source: 'FIXME', text } ),
      headers: new Headers({
        'content-type': 'application/json'
      })
    })
    .then( response => response.json() )
    .then( updated => {
      messages = updated;
      renderMessages(messages);
    });
  }

  function bindNewMessage() {
    document.querySelector(".send-message").addEventListener('click', () => {
      const text = document.querySelector('.new-message').value;
      sendMessage(text);
    });
  }

  function pollMessages() {
    updateMessages();
    setTimeout( pollMessages, 3000 );
  }

  function startup() {
    bindNewMessage();
    pollMessages();
  }

  function updateMessages() {
    fetch('/messages').then( response => {
      if(response.ok) {
        return response.json();
      }
      console.log('OH NOES!');
    }).then( data => {
      messages = data;
      renderMessages(messages);
    });
  }

  startup();

})();
