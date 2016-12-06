import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';

import {BrowserRouter, Match, Miss, Push} from 'react-router'
import base from '../build/base'

import Login from '../build/components/Login.jsx';
import Home from '../build/components/Home.jsx';
import Programmer from '../build/components/Programmer.jsx'
import NotFound from '../build/components/NotFound.jsx'
import MyResumes from '../build/components/MyResumes.jsx'
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
    <button className="facebook" onClick={() => this.authenticate('facebook')}>Login with Facebook</button>
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

    // componentWillMount(){
    //    this.ref = base.syncState(`${this.props.params.username}/programmer`
    //    , {
    //      context: this,
    //      state: 'resumes'
    //    })
    // };
    //
    // componentWillUnmount() {
    //   base.removeBinding(this.ref)
    // }

    addResumeToState(resumes){
      this.setState({resumes})
    }

    pushStateToMyResume(){
      this.context.router.push({
        pathname: '/:username/myresumes',
        state: {
          resumes: this.state.resumes
        }
      })
    }

    render() {
        return (
          <Programmer
          resumes={this.state.resumes} addResumeToState={this.addResumeToState}/>
          );
        }
    }

ResumeWrapper.contextTypes = {
  router: React.PropTypes.object
}


// <Match exactly pattern='/' component={LoginWrapper}/>

const Root = () => {
  return (
    <BrowserRouter>
      <div>
      <Match pattern='/' component={ResumeWrapper} />
        <Match exactly pattern='/:username' component={Home}/>
        <Match pattern='/:username/myresumes' component={MyResumes} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render( <Root/>, document.getElementById('root') );
