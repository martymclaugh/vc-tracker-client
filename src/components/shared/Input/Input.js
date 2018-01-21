// @flow

import React from 'react';
import { Props } from '../../../flow/shared/input-types';

import './input-styles.css';

const renderInput = (props) => {
  if (props.textArea) {
    return (
      <textarea cols="30" rows="5"
        className={`input-textarea input__${props.field}`}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={(e) => props.handleKeyPress(e, props.field)}
      />
    );
  }
  if (props.dropdown) {
    const options = props.options.map(option => <option value={option}>{option}</option>)
    return (
      <select
        onChange={(e) => props.handleKeyPress(e, props.field)}
        className={`input-select input__${props.field}`}
        defaultValue={props.defaultValue}
      >
        {options}
      </select>
    )
  }
  return (
    <input
      defaultValue={props.defaultValue}
      className="input-text"
      placeholder={props.placeholder}
      onChange={(e) => props.handleKeyPress(e, props.field)}
      type={props.type || 'text'}
    />
  );
}
export default (props: Props) => (
  <div className={`input__container ${props.field}`}>
    {props.title && <div className="input__title">{props.title}</div>}
    {props.prefix && <span className="prefix">{props.prefix}</span>}
    {renderInput(props)}
  </div>
)
