// @flow

import React, { Component } from 'react';
import toCurrency from '../../../helpers/to-currency';
import Countdown from '../../shared/Countdown/Countdown';
import Button from '../../shared/Button/Button';
import { Props, State } from '../../../flow/components/company-display-types';

class CompanyDisplay extends Component<Props, State> {
  constructor(props: Props) {
    super (props);

    this.state = {
      display: 'show'
    }
  }
  render() {
    const {
      name,
      budget,
      raised,
      timeline,
      description,
    } = this.props;

    return (
      <div className="company-display">
        <div className="company-display__name">{name}</div>
        <div className="company-display__budget">{toCurrency(budget)}</div>
        <div className="company-display__raised">{toCurrency(raised)}</div>
        <Countdown date={timeline} />
        <Button onClick={() => this.props.onEditClick()}>Edit</Button>
      </div>
    )
  }
}

export default CompanyDisplay;
