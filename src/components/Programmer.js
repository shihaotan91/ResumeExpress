import React from 'react';

import ProgrammerForm from './ProgrammerForm'
import base from '../base'

class Programmer extends React.Component {

  constructor() {
    super()

    this.addResume = this.addResume.bind(this);
  }

  componentWillMount(){
    console.log(`${this.props.resumes}`)
     this.ref = base.syncState(`${this.props.username}/programmer`
     , {
       context: this,
       state: 'resumes'
     })
  };

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  addResume(resume) {
    const resumes = {...this.props.resumes}
    console.log(resumes)
    console.log(resume)
    const timestamp = Date.now()
    resumes[`resume-${timestamp}`] = resume
    this.props.addResumeToState(resumes)
  }

  // updateResume(key, updatedResume) {
  //   const resumes = {...this.state.resumes}
  //   resumes[key] = updatedResume
  //   this.setState({resumes})
  // }


  render() {
    return (
      <div>
      <ProgrammerForm
      addResume={this.addResume} resumes={this.props.resumes}/>
      </div>
    )
  }
}

export default Programmer
