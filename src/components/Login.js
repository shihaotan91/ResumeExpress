import React from 'react';
import base from '../base'

class Login extends React.Component {

  constructor() {
    super()

    this.createResume = this.createResume.bind(this);
    }

  createResume() {
    this.context.router.transitionTo(`/${this.props.uid}`)
  }

  render() {
    const logout = <button onClick={this.props.logout}>Log out!</button>
    const createButton = <button onClick={this.createResume}>Create Resume</button>

    // check if any one is logged in
    if(!this.props.uid) {
      return (
        <div>
        {this.props.renderLogin()}
        </div>
      )
    }

    if(this.props.uid) {
      return (
        <div>
        {logout}
        {createButton}
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
