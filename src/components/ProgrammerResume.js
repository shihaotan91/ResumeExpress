import React from 'react';
import '../css/ProgrammerResume.css';

import Everything from 'css-to-pdf'
import Everything2 from 'jquery'

import Programmer from './Programmer'

class ProgrammerResume extends React.Component {

  constructor() {
    super()

  }


  render() {
    // const click="return xepOnline.Formatter.Format('Resume', {render:'download'})";
    // document.getElementById('buttons').append('<button onclick="'+ click +'">PDF</button>');
    // <button onClick={click}>Click this</button>
    const details = this.props
    return (
      <div>
        <div id="Resume">
          <h2>hello {details.name}</h2>
          <h2>hello {details.job1}</h2>
          <h2>hello {details.job2}</h2>
        </div>


      </div>
    )
  }
}

export default ProgrammerResume
