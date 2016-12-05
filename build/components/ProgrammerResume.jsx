import React from 'react';
import '../css/ProgrammerResume.css';

import cssToPdf from 'css-to-pdf'
import $ from 'jquery'

import Programmer from './Programmer.jsx'

class ProgrammerResume extends React.Component {

  constructor() {
    super()

    window.onload = function() {
    if (window.xepOnline) {
        // jQuery is loaded
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
      }
    }
    this.printPdf = this.printPdf.bind(this);
  }

  printPdf() {
    return (xepOnline.Formatter.Format('ResumeTemplate', {render:'download'}))
  }

  render() {
    // const click="return xepOnline.Formatter.Format('Resume', {render:'download'})";
    // document.getElementById('buttons').append('<button onclick="'+ click +'">PDF</button>');
    // <button onClick={click}>Click this</button>
    const details = this.props
    return (
      <div className="col-md-8" id="resumeTemplateMain">
        <div id="ResumeTemplate" >
          <h2>hello {details.name}</h2>
          <h2>hello {details.job1}</h2>
          <h2>hello {details.job2}</h2>
        </div>

        <a href="#" onClick={this.printPdf}>
        print
        </a>

      </div>
    )
  }
}

export default ProgrammerResume
