import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import {BrowserRouter, Match, Miss} from 'react-router'

import Login from './components/Login';
import Home from './components/Home';
import Programmer from './components/Programmer'
import NotFound from './components/NotFound'
//
const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={Login} />
        <Match exactly pattern='/:username' component={Home}/>
        <Match pattern='/:username/programmer' component={Programmer} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render( <Routes />, document.getElementById('root') );
