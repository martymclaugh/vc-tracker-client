// @flow

import React from 'react';

const renderInput = (props) => {
  if (props.textArea) {
    return (
      <textarea cols="30" rows="5"
        className={`input input__${props.field}`}
        placeholder={props.placeholder}
        onChange={(e) => props.handleKeyPress(e, props.field)}
      />
    );
  }
  return (
    <input
      className="input"
      placeholder={props.placeholder}
      onChange={(e) => props.handleKeyPress(e, props.field)}
      type={props.type || 'text'}
    />
  );
}
export default (props) => (
  <div className="input__container">
    {props.title && <div className="input__title">{props.title}</div>}
    {props.prefix && <span className="prefix">{props.prefix}</span>}
    {renderInput(props)}
  </div>
)
