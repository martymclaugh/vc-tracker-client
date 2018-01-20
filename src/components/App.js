import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomeScreen from './HomeScreen/HomeScreen';
import CompanyScreen from './CompanyScreen/CompanyScreen';

import '../assets/styles/base.css';

const App = () => (
  <Router>
    <div className="routes">
      <Route path="/" exact component={HomeScreen} />
      <Route path="/company/:slug" component={CompanyScreen} />
    </div>
  </Router>
);

export default App;
