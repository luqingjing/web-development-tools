// export const getChatMessages = () => {
//   return fetch(`/messages`, {
//     method: 'GET',
//   })
//   .then(response => {
//     if(response.ok) {
//       return response.json();
//     } else {
//       return Promise.reject('fetch-error');
//     }
//   });
// };

export const getChatMessages = (sinceID) => {
  return fetch(`/messages/${sinceID}`, {
    method: 'GET',
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
};

export const sendChatMessage = ({source, text}) => {
  return fetch(`/messages`, {
    method: 'POST',
    body: JSON.stringify({source, text}),
    headers: new Headers({
      'content-type': 'application/json'
    })
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
};

export const getUserID = (username) => {
  return fetch(`/session/${username}`, {
    method: 'GET',
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
}

export const sendUsername = (username) => {
  fetch(`/session/${username}`, {
    method:'POST',
    body: JSON.stringify({username}),
    headers: new Headers({
    'content-type': 'application/json'
    })
  })
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      return Promise.reject('fetch-error');
    }
  });
}

export const deleteUser = (username) => {
  fetch(`/session/${username}`, {
    method: 'DELETE',
    body: JSON.stringify({username}),
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
}

