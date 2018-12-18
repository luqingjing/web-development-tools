import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import HomePage from "./components/HomePage";
import PersonalHomepage from "./components/PersonalHomepage";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog";
import {
  userSignIn,
  userSignUp,
  userSignOut,
  AddOneBlog,
  getAllBlogs,
  getUserBlogs,
  editOneBlog,
  deleteOneBlog

} from "./services";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      loggedin: false,
      blogs:[],
      pendingUsername:'',
      pendingPassword:'',
      pendingTitle: '',
      pendingContent: '',
      errorMessage:'',
      targetBlog: {},
      personal: false,
      blogAdd: false,
      blogEdit: false
    };
    this.executeLogin = this.executeLogin.bind(this);
    this.executeSignUp = this.executeSignUp.bind(this);
    this.jumpToAddPage = this.jumpToAddPage.bind(this);
    this.jumpToPersonal = this.jumpToPersonal.bind(this);
    this.jumpToEditPage = this.jumpToEditPage.bind(this);
    this.jumpToHome = this.jumpToHome.bind(this);
    this.signOut = this.signOut.bind(this);
    this.updateUsername=this.updateUsername.bind(this);
    this.updatePassword=this.updatePassword.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.executeAddBlog = this.executeAddBlog.bind(this);
    this.executeEditBlog = this.executeEditBlog.bind(this);
    this.updateBlogs=this.updateBlogs.bind(this);
    this.pollBlogs = this.pollBlogs.bind(this);
    this.deleteBlog = this.deleteBlog.bind(this);
  }

  componentDidMount() {
    this.pollBlogs();
  }

  pollBlogs(){
    getAllBlogs().then(this.updateBlogs)
  }

  executeLogin() {
      if (this.state.pendingUsername === '' || this.state.pendingPassword === '') {
          this.setState({
              errorMessage: 'Username or Password cannot be empty!'
          })
      } else {
          userSignIn({username: this.state.pendingUsername, password: this.state.pendingPassword}).then(data => {
              this.setState({
                  loggedin: data.state,
                  errorMessage: ''
              })
          }).catch(error => {
              this.setState({
                  errorMessage: error
              })
          });
      }
  }

  executeSignUp() {
      if (this.state.pendingUsername === '' || this.state.pendingPassword === '') {
          this.setState({
              errorMessage: 'Username or Password cannot be empty!'
          })
      } else {
          userSignUp({username:this.state.pendingUsername,password:this.state.pendingPassword}).then(data=> {
              this.setState({
                  loggedin: data.state,
                  errorMessage:''
              });
          }).catch(error=>{
              this.setState({
                  errorMessage: error
              })
          });
      }
  }

  signOut() {
    userSignOut(this.state.pendingUsername).then(
        this.setState({
            loggedin:false,
            pendingUsername:'',
            pendingPassword:''
        })
    );

    this.jumpToHome();
  }

  updateBlogs(blogData){
    this.setState({
      blogs:blogData
    })
  }

  updateUsername(e) {
    this.setState({
          pendingUsername: e.target.value
      });
  }

  updatePassword(e) {
    this.setState({
          pendingPassword: e.target.value
      });
  }

  executeAddBlog() {
    AddOneBlog(
      {username:this.state.pendingUsername},
      {title:this.state.pendingTitle,
        author:this.state.pendingUsername,
        content:this.state.pendingContent})
      .then(this.updateBlogs);
    this.jumpToHome();
  }

  executeEditBlog() {
    editOneBlog({username:this.state.pendingUsername},
      {title:this.state.pendingTitle,
        author:this.state.pendingUsername,
        content:this.state.pendingContent,
        blogID:this.state.targetBlog.blogID})
      .then(this.updateBlogs);
    this.jumpToHome();
  }

  deleteBlog(target) {
    this.setState({
      targetBlog: target
    });
    deleteOneBlog(this.state.pendingUsername, this.state.targetBlog.blogID);
    this.jumpToHome();
  }

  updateTitle(e) {
    this.setState({
      pendingTitle: e.target.value
    });
  }

  updateContent(e) {
    this.setState({
      pendingContent: e.target.value
    });
  }

  jumpToAddPage() {
    this.setState({
      personal: false,
      blogAdd: true,
      blogEdit: false
    });
  }

  jumpToPersonal() {
    getUserBlogs({username:this.state.pendingUsername})
        .then(this.updateBlogs);
    this.setState({
      personal: true,
      blogAdd: false,
      blogEdit: false
    });
  }

  jumpToEditPage(target) {
    this.setState({
      personal: false,
      blogAdd: false,
      blogEdit: true,
      targetBlog: target
    });
  }

  jumpToHome() {
    this.pollBlogs();
    this.setState({
      personal: false,
      blogAdd: false,
      blogEdit: false
    });
  }

  render() {
    const personal = this.state.personal;
    const blogAdd = this.state.blogAdd;
    const blogEdit = this.state.blogEdit;
    const isLoggedIn = this.state.loggedin;
    return (
      <div className="App">
        <Header
          username={this.state.pendingUsername}
          isLoggedIn={isLoggedIn}
          executeLogin={this.executeLogin}
          executeSignUp={this.executeSignUp}
          jumpToAddPage={this.jumpToAddPage}
          jumpToPersonal={this.jumpToPersonal}
          jumpToHome={this.jumpToHome}
          signOut={this.signOut}
        />
        <div id="body">
          {(!personal && !blogAdd && !blogEdit) ?
            <HomePage
              blogs={this.state.blogs}
              username={this.state.pendingUsername}
              isLoggedIn={isLoggedIn}
              updateUsername={this.updateUsername}
              updatePassword={this.updatePassword}
              executeLogin={this.executeLogin}
              executeSignUp={this.executeSignUp}
              jumpToAddPage={this.jumpToAddPage}
              jumpToPersonal={this.jumpToPersonal}
              errorMessage={this.state.errorMessage}
            /> : null}
          {(personal && !blogAdd && !blogEdit) ?
            <PersonalHomepage
              username={this.state.pendingUsername}
              personalBlogs={this.state.blogs}
              jumpToEditPage={this.jumpToEditPage}
              deleteBlog={this.deleteBlog}
            /> : null}
          {(!personal && blogAdd && !blogEdit) ?
            <AddBlog
              updateTitle={this.updateTitle}
              updateContent={this.updateContent}
              executeAddBlog={this.executeAddBlog}
              jumpToHome={this.jumpToHome}
            /> : null}
          {(!personal && !blogAdd && blogEdit) ?
            <EditBlog
              targetBlog={this.state.targetBlog}
              updateTitle={this.updateTitle}
              updateContent={this.updateContent}
              executeEditBlog={this.executeEditBlog}
              jumpToHome={this.jumpToHome}
            /> : null}
        </div>
      </div>
    )
  }
}

export default App;
