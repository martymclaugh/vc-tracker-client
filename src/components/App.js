import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';
import '../assets/styles/base.css';

const App = () => (
  <Router>
    <div className="App">
      {/* <Route path="/home" component={HomeScreen} /> */}
      <h3>React Redux Starter:</h3>
      <p>- redux</p>
      <p>- redux saga</p>
      <p>- redux logger</p>
      <p>- react router</p>
      <p>- sass loader (make sure to import the `.css` file generated)</p>
      <p>  - 12 column sass grid system</p>
      <p>- immutable</p>
      <p>- flow</p>
      <p>- eslint</p>
    </div>
  </Router>
);

export default App;
