import React from 'react';

import ProgrammerForm from './ProgrammerForm.jsx'
import ResumeList from './ResumeList.jsx'

import base from '../base'

import Bootstrap from 'react-bootstrap'

class Programmer extends React.Component {

  constructor() {
    super()

    this.addResume = this.addResume.bind(this);
  }

  addResume(resume) {
    const resumes = {...this.props.resumes}
    console.log(resumes)
    console.log(resume)
    const timestamp = Date.now()
    resumes[`resume-${timestamp}`] = resume
    this.props.addResumeToState(resumes)
  }

  render() {
    console.log(this.props.resumes)
    return (
      <div>
        <ProgrammerForm
        addResume={this.addResume} resumes={this.props.resumes}/>
      </div>
    )
  }
}

export default Programmer
