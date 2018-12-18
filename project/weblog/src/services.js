export const getAllBlogs = ()=>{
    const url = `/home`;
    return fetch(`${url}`,{
        method: 'GET',
    }).then(response => {
        if (response.ok){
            return response.json();
        } else {
            return Promise.reject('fetch-error');
        }
    })
};

export const getUserBlogs = ({username})=>{
    const url = `/${username}`;
    return fetch(`${url}`,{
        method: 'GET',
    }).then(response => {
        if (response.ok){
            return response.json();
        } else {
            return Promise.reject('fetch-error');
        }
    })
};

export const userSignUp = ({username,password})=>{
    const url = `/signup`;
    return fetch(`${url}`,{
        method: 'POST',
        body: JSON.stringify( {username,password} ),
        headers: new Headers({
            'content-type': 'application/json'
        })
    }).then( response => {
        if( response.ok ) {
            return response.json();
        } else {
            return response.json().then(err=>{throw err});
        }
    });
};

export const userSignIn = ({username,password})=>{
    const url = `/login`;
    return fetch(`${url}`,{
        method: 'PUT',
        body: JSON.stringify( {username,password} ),
        headers: new Headers({
            'content-type': 'application/json'
        })
    }).then( response => {
        if( response.ok ) {
            return response.json();
        } else {
            return response.json().then(err=>{throw err});
        }
    });
};

export const userSignOut = (username)=>{
    const url = `/signout`;
    return fetch(`${url}`,{
        method: 'PUT',
        body: JSON.stringify( {username} ),
        headers: new Headers({
            'content-type': 'application/json'
        })
    }).then( response => {
        if( response.ok ) {
            return response.json();
        } else {
            return Promise.reject('fetch-error');
        }
    });
};

export const AddOneBlog = ({username},{title,author,content})=>{
    const url = `/${username}/add`;
    return fetch(`${url}`,{
        method: 'POST',
        body: JSON.stringify( {title,author,content} ),
        headers: new Headers({
            'content-type': 'application/json'
        })
    }).then(response => {
        if (response.ok){
            return response.json();
        } else {
            return Promise.reject('fetch-error');
        }
    })
};


export const getOneBlog = (username,blogID)=>{
    const url = `/${username}/edit/${blogID}`;
    return fetch(`${url}`,{
        method: 'GET',
    }).then(response => {
        if (response.ok){
            return response.json();
        } else {
            return Promise.reject('fetch-error');
        }
    })
};

export const editOneBlog = ({username},{title,author,content,blogID})=>{
    const url = `/${username}/edit/${blogID}`;
    return fetch(`${url}`,{
        method: 'PUT',
        body: JSON.stringify( {title,author,content,blogID} ),
        headers: new Headers({
            'content-type': 'application/json'
        })
    }).then( response => {
        if( response.ok ) {
            return response.json();
        } else {
            return Promise.reject('fetch-error');
        }
    });
};

export const deleteOneBlog = (username,blogID)=>{
    const url = `/${username}/delete/${blogID}`;
    return fetch(`${url}`,{
        method:'DELETE',
        body:JSON.stringify({username,blogID}),
        headers: new Headers({
            'content-type':'application/json'
        })
    }).then(response=>{
        if (response.ok){
            return response.json();
        } else {
            return Promise.reject('fetch error');
        }
    })
};