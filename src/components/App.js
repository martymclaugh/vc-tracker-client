import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomeScreen from './HomeScreen/HomeScreen';

import './App.css';
import '../assets/styles/base.css';

const App = () => (
  <Router>
    <Route path="/" exact component={HomeScreen} />
  </Router>
);

export default App;
