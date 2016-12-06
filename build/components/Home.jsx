import React from 'react';
import '../../src/css/Home.css';

import Bootstrap from 'react-bootstrap'

class Home extends React.Component {
  constructor() {
  super();
  // this.goToResume = this.goToResume.bind(this);
  this.goToProgrammerResume = this.goToProgrammerResume.bind(this);
}

  // goToResume(event) {
  //     event.preventDefault()
  //     const resumeType = this.resumeInput.value
  //     console.log(`going to ${resumeType}`)
  //     this.context.router.transitionTo(`/${this.props.params.username}/${resumeType}`)
  //   }

    goToProgrammerResume() {
    this.context.router.transitionTo(`/${this.props.params.username}/programmer`  )
    }

  render() {
    return (
      <div className="Home">
      <h3 className="areYou">Are you a</h3>
        <h2 className="tellMe">Tell me<br/>more about<br/> yourself...</h2>
        <a onClick={this.goToProgrammerResume}>
        <img className="programLogo" src="http://i.imgur.com/n5oyQey.png"/>
        </a>
        <h3 className="or">or</h3>
        <img className="designLogo" src="http://i.imgur.com/6uASbC1.png"/>
        <h5 className="shy">Don't be shy. Click on it.</h5>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
}

export default Home;
