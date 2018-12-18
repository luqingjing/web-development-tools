import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Controls from './Controls';
import Logout from './Logout';

import {
  sendUsername, 
  sendChatMessage,
  getChatMessages,
  deleteUser,
  getUserID
} from './services';

const POLLING_INTERVAL = 1000;

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      userID: '',
      users: [],
      pendingUsername: '',
      messages: [],
      pendingMessage: '',
      sinceID: '2'
    };
    this.updatePendingMessage = this.updatePendingMessage.bind(this);
    this.updatePendingUsername = this.updatePendingUsername.bind(this);
    this.executeLogin = this.executeLogin.bind(this);
    this.executeLogout = this.executeLogout.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.pollMessages = this.pollMessages.bind(this);
    this.updateMessageList = this.updateMessageList.bind(this);
  }

  componentDidMount() {
    this.pollMessages();
  }

  updateMessageList(messageData) {
    this.setState({
      messages: messageData.messages,
      users: messageData.users
    });
  }

  pollMessages() {
    getChatMessages(this.state.sinceID)
    .then( this.updateMessageList )
    .catch( error => {
      console.warn(`ERROR: ${error}`);
    });
    setTimeout(this.pollMessages, POLLING_INTERVAL);
  }

  updatePendingMessage(e) {
    this.setState({
      pendingMessage: e.target.value
    });
  }

  updatePendingUsername(e) {
    this.setState({
      pendingUsername: e.target.value
    });
  }

  executeLogin() {
    this.setState({
      user: this.state.pendingUsername,
      pendingUsername: ''
    });

    sendUsername(this.state.pendingUsername);

    getUserID(this.state.pendingUsername)
    .then(data => {
      this.setState({
        userID: data.id
      })
    })
    .catch( error => {
      console.warn(`ERROR: ${error}`);
    });
  }

  executeLogout(user) {
    deleteUser(user);
    this.setState({
      user: '',
      userID: ''
    })
  }

  sendMessage() {
    sendChatMessage({ source: this.state.userID, text: this.state.pendingMessage })
    .then( this.updateMessageList )
    .catch( error => {
      console.warn(`ERROR: ${error}`);
    });

    this.setState({
      pendingMessage: ''
    });
  }

  render() {
    const isLoggedIn = !!this.state.user;
    return (
      <div className="App">
        {isLoggedIn && <Logout 
            username={this.state.user}
            executeLogout={() => this.executeLogout(this.state.user)}
          />}

        {isLoggedIn && <Display users={this.state.users} messages={this.state.messages}/>}

        <Controls
          isLoggedIn={!!this.state.user}
          sendMessage={this.sendMessage}
          message={this.state.pendingMessage}
          updatePendingMessage={this.updatePendingMessage}
          updatePendingUsername={this.updatePendingUsername}
          username={this.state.pendingUsername}
          executeLogin={this.executeLogin}
        />
       </div>
    );
  }
}

export default App;
