import React from 'react';
import '../css/ProgrammerResume.css';

import Programmer from './Programmer'

class ProgrammerResume extends React.Component {
  render() {
    const details = this.props
    return (
      <div>
        <h2>hello {details.name}</h2>
        <h2>hello {details.job1}</h2>
        <h2>hello {details.job2}</h2>
      </div>
    )
  }
}

export default ProgrammerResume
