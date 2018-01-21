// @flow

import React from 'react';
import toCurrency from '../../../helpers/to-currency';
import { Props } from '../../../flow/shared/funds-bubble-types';

import './funds-bubble-styles.css';

export default (props: Props) => {

  const styles = {
    width: `${props.raised / props.budget * 15}rem`,
    color: 'red',
    maxWidth: '15rem',
    // $FlowFixMe
    ...props.raised >= props.budget && {
      borderTopRightRadius: '50px',
      borderBottomRightRadius: '50px',
    }
  };

  return (
    <div>
      <div className="funds-bubble__budget">Total budget: {toCurrency(props.budget)}</div>
      <div className="funds-bubble">
        <div className="funds-bubble__container"/>
        <div style={styles} className="funds-bubble__bubble-fill" />
        <div className="funds-bubble__raised">{toCurrency(props.raised)}</div>
      </div>
    </div>
  )
}
