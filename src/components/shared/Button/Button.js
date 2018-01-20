import React from 'react';

export default (props) => (
  <button
    className={`button ${props.class}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)
