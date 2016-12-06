import React from 'react';
import Router from 'react-router'
import base from '../base'

import Bootstrap from 'react-bootstrap'

import '../../src/css/Login.css';

class Login extends React.Component {

  constructor() {
    super()

    this.createResume = this.createResume.bind(this);
    this.viewResume = this.viewResume.bind(this)
    }

  createResume() {
    this.context.router.transitionTo(`/${this.props.uid}`)
  }

  viewResume() {
    this.context.router.transitionTo(`/${this.props.uid}/resumelist`)
  }

  render() {
    const logout = <button className="logout" onClick={this.props.logout}>Logout</button>
    const createButton = <button className="createResumeButton" onClick={this.createResume}>Create Resume</button>
    const viewButton = <button className="viewResumeButton" onClick={this.viewResume}>View Resume</button>

    // check if any one is logged in
    if(!this.props.uid) {
      return (
        <div className="login-page">
          <img className="logo" src="http://i.imgur.com/4chEImd.png"/>
          <h4 className="hard">We know it's hard</h4>
          <h4 className="easy">So we make it <span className="easyword">easy</span></h4>
          {this.props.renderLogin()}
        </div>
      )
    }

    if(this.props.uid) {
      return (
        <div className="login-page">
        <img className="logo" src="http://i.imgur.com/4chEImd.png"/>
        <h4 className="hard">We know it's hard</h4>
        <h4 className="easy">So we make it <span className="easyword">easy</span></h4>
        {createButton}
        {viewButton}
        {logout}
        </div>
      )
    }
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login
