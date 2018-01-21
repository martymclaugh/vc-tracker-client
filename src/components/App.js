import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomeScreen from './HomeScreen/HomeScreen';
import CompanyScreen from './CompanyScreen/CompanyScreen';
import VentureCapitalistScreen from './VentureCapitalistScreen/VentureCapitalistScreen';

import '../assets/styles/base.css';

const App = () => (
  <Router>
    <div className="routes">
      <Route path="/" exact component={HomeScreen} />
      <Route path="/companies/:slug" component={CompanyScreen} />
      <Route path="/venture-capitalists/:slug" component={VentureCapitalistScreen} />
    </div>
  </Router>
);

export default App;
