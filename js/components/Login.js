import React from 'react';
import base from '../base'

class Login extends React.Component {

  constructor() {
    super()

    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);

    this.state = {
      uid: null
    }
  }

  renderLogin() {
    return (
    <nav className="login">
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
        console.log(error)
        return;
      }
      this.context.router.transitionTo(`/${username}`)
    }

  render() {
    const logout = <button>Log out!</button>
    // check if any one is logged in
    if(!this.state.uid) {
      return (
        <div>
        {this.renderLogin()}
        </div>
      )
    }

    if(this.state.uid) {
      return (
        <div>
        {logout}
        </div>
      )
    }

    return(
      <div>
        <h1>Login Page</h1>

      </div>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login
