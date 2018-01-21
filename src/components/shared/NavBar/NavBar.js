// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar-styles.css';

export default () => (
  <div className="nav">
    <Link to="/">
      <div className="nav__title">VC Tracker</div>
    </Link>
  </div>
)
