import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Controls from './Controls';

import { sendChatMessage, getChatMessages } from './services';

const POLLING_INTERVAL = 3000;

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: '',
      users: [],
      pendingUsername: '',
      messages: [],
      pendingMessage: ''
    };
    this.updatePendingMessage = this.updatePendingMessage.bind(this);
    this.updatePendingUsername = this.updatePendingUsername.bind(this);
    this.executeLogin = this.executeLogin.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.pollMessages = this.pollMessages.bind(this);
    this.updateMessageList = this.updateMessageList.bind(this);
  }

  componentDidMount() {
    this.pollMessages();
  }

  updateMessageList( messageData ) {
    this.setState({
      messages: messageData.messages,
      users: messageData.users
    });
  }

  pollMessages() {
    getChatMessages()
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
  }

  sendMessage() {
    sendChatMessage({ source: this.state.user, text: this.state.pendingMessage })
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
        {isLoggedIn && <Display users={this.state.users} messages={this.state.messages}/>}
        <Controls
          isLoggedIn={!!this.state.user}
          sendMessage={this.sendMessage }
          message={this.state.pendingMessage}
          updatePendingMessage={ this.updatePendingMessage }
          updatePendingUsername={ this.updatePendingUsername }
          username={this.state.pendingUsername}
          executeLogin={this.executeLogin}
        />
       </div>
    );
  }
}

export default App;
