import React from 'react';
import '../css/ProgrammerForm.css';

import ProgrammerResume from './ProgrammerResume'

class ProgrammerForm extends React.Component {
  constructor() {
    super()

    this.state = {
      resumeInputName: '',
      resumeInputJob1: '',
      resumeInputJob2: ''
    }

    this.createResume = this.createResume.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.handleResumeInput = this.handleResumeInput.bind(this)
  }

  createResume(event) {
    event.preventDefault();
    console.log("test create resume")

    const resume = {
      name: this.name.value,
      job1: this.job1.value,
      job2: this.job2.value,
      }
      this.props.addResume(resume)
    }

 //  handleChange(e, key) {
 //    const resumes = this.props.resumes[key];
 //    const updatedResume = {...resumes,
 //    [e.target.name]:[e.target.value],
 //    [e.target.job1]:[e.target.value],
 //    [e.target.job2]:[e.target.value],
 //    }
 //    console.log(key, updatedResume)
 //   this.props.updateResume(key, updatedResume);
 // }

  handleResumeInput(e) {
    this.setState({
      resumeInputName: e.target.value,
      resumeInputJob1: e.target.value,
      resumeInputJob2: e.target.value,
    })
  }

  render(key) {
    const resume = this.props.resumes[key]
    return (
      <div className="resumeForm1" key={key}>
        <form
        ref={(input) => this.programmerForm = input} className="programmer-form"
        onChange={this.handleChange}
        onSubmit={(e) => this.createResume(e)}>

        <input ref={(input) => this.name = input}
        onChange={this.handleResumeInput} value={this.state.resumeInputName}
        type="text" placeholder="Your Name"/>

        <input ref={(input) => this.job1 = input}
        onChange={this.handleResumeInput} value={this.state.resumeInputJob1}
        type="text" placeholder="Your First Job"/>

        <input ref={(input) => this.job2 = input}
        onChange={this.handleResumeInput} value={this.state.resumeInputJob2}
        type="text" placeholder="Your Second Job"/>

        <button type="submit">Submit Resume</button>
        </form>

        <ProgrammerResume
        name={this.state.resumeInputName}
        job1={this.state.resumeInputJob1}
        job2={this.state.resumeInputJob2}/>
      </div>
    )
  }
}

export default ProgrammerForm
