import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import {BrowserRouter, Match, Miss} from 'react-router'
import base from './base'

import Login from './components/Login';
import Home from './components/Home';
import Programmer from './components/Programmer'
import NotFound from './components/NotFound'
import MyResumes from './components/MyResumes'
//
class LoginWrapper extends React.Component {

  constructor() {
    super()

    this.state = {
      uid: null,
    }

    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
  }

  // componentWillMount() {
  //   const uidExist = uidExist.getItem(`${this.state.uid}`)
  //
  //   if(uidExist) {
  //   //update our component state
  //   this.setState({
  //     uid: JSON.parse(uidExist)
  //     })
  //   }
  // }

  componentWillMount(){
    //sync up state of cats with firebase here
    //check for loggedIn User
    const localUserRef = localStorage.getItem("localUser");
    if (localUserRef){
      //update App state.uid
      this.setState({uid: localUserRef});
      }
    }

  renderLogin() {
    return (
    <nav className="login">
    <p>Sign in to manage you store's inventory</p>
    <button className="facebook" onClick={() => this.authenticate('facebook')}>Login with facebook</button>
    </nav>
    )
  }

    authenticate(provider) {
    console.log(`trying to log in with${provider}`)
    base.authWithOAuthPopup(provider, this.authHandler)
    }

    authHandler(err, authData) {
      console.log(authData);
      const username = authData.user.displayName.replace(/\s/g, '');
      console.log(username)
      if (err) {
        console.log(err)
        return;
      }
      localStorage.setItem(`localUser`, `${username}`)
      this.setState ({
        uid: username
      })
      this.context.router.transitionTo(`/${username}`)
    }

    logout() {
      base.unauth();
      localStorage.removeItem("localUser")
      this.setState({uid: null})
    }

    render() {
        return (
          <Login renderLogin={this.renderLogin} authenticate={this.authenticate} authHandler={this.authHandler} logout={this.logout}
          uid={this.state.uid}/>
          );
        }
    }

  LoginWrapper.contextTypes = {
    router: React.PropTypes.object
  }

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  ///////// RESUMEWRAPPER STARTS HERE /////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////

  class ResumeWrapper extends React.Component {
    constructor() {
      super()

      this.state = {
        resumes: {}
      }
      this.addResumeToState = this.addResumeToState.bind(this)
    }

    addResumeToState(resumes){
      this.setState({resumes})
    }

    render() {
        return (
          <Programmer
          resumes={this.state.resumes} username={this.props.params.username} addResumeToState={this.addResumeToState}/>
          );
        }
    }

ResumeWrapper.contextTypes = {
  router: React.PropTypes.object
}



const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={LoginWrapper}/>
        <Match exactly pattern='/:username' component={Home}/>
        <Match pattern='/:username/programmer' component={ResumeWrapper} />
        <Match pattern='/:username/myresumes' component={MyResumes} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render( <Root />, document.getElementById('root') );
