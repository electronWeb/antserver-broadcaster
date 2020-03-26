import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';

export default class Entrypoint extends Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}
