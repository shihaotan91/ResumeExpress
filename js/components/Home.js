import React from 'react';
import '../css/Home.css';

class Home extends React.Component {
  constructor() {
  super();
  this.goToResume = this.goToResume.bind(this);
}

  goToResume(event) {
    event.preventDefault()

    const resumeType = this.resumeInput.value
    console.log(`going to ${resumeType}`)
    this.context.router.transitionTo(`/${this.props.params.username}/${resumeType}`)
    }

  render() {
    return (
      <div className="Home">
          <h2>Create your resume</h2>
        <p>
          To get started, please select the type of resume you want tp create.
        </p>
        <form className="resume-selector" onSubmit={this.goToResume}>
        <select ref={(input)=> {this.resumeInput = input}}>
          <option value="programmer">Programmer</option>
          <option value="designer">Designer</option>
        </select>
        <button type="submit">Create Resume</button>
        </form>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
}

export default Home;
