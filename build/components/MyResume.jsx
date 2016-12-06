import React from 'react';
import {render} from 'react-dom'

import '../../src/css/MyResume.css';

class MyResume extends React.Component {

  constructor() {
    super()

    this.goToUpdateResume = this.goToUpdateResume.bind(this)
  }

  goToUpdateResume() {
  this.context.router.transitionTo(`/updateResume`  )
  }

  render() {
    const {details, index} = this.props;
    return (
      <div>
        <li>
          <button onClick={this.goToUpdateResume}>{this.props.index}
          <img className="resumelogo" src="http://i.imgur.com/2UbRO47.png"/>
          </button>
        </li>
      </div>
    )
  }
}

MyResume.contextTypes = {
  router: React.PropTypes.object
}

export default MyResume
