export const getChatMessages = () => {
  return fetch(`/messages`, {
    method: 'GET',
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
};

export const sendChatMessage = ({ source, text }) => {
  return fetch(`/messages`, {
    method: 'POST',
    body: JSON.stringify( { source, text } ),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })
  .then( response => {
    if( response.ok ) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
};

