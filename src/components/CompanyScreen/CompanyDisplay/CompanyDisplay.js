// @flow

import React, { Component } from 'react';
import Countdown from '../../shared/Countdown/Countdown';
import Button from '../../shared/Button/Button';
import FundsBubble from '../../shared/FundsBubble/FundsBubble';
import { Props, State } from '../../../flow/components/company-display-types';

import './company-display-styles.css';

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
        <div className="company-display__description">{description}</div>
        <Button class="company-display__edit" onClick={() => this.props.onEditClick()}>&#x270E;</Button>
        <FundsBubble
          budget={budget}
          raised={raised}
        />
        <Countdown date={timeline} />
      </div>
    )
  }
}

export default CompanyDisplay;
