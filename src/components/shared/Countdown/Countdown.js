import React, { Component } from 'react';
import formatDate from '../../../helpers/format-date'

import './countdown.css';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    this.renderTimeLeft = this.renderTimeLeft.bind(this);
    this.startClock = this.startClock.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  componentDidMount() {
    this.setState(formatDate(this.props.date));
    this.startClock();
  }
  componentWillUnmount() {
    clearInterval(this.countDown);
  }
  renderTimeLeft() {
    return Object.keys(this.state).map(key => (
        `${key}: ${this.state[key]}`
      )).join(' ');
  }
  startClock() {
    this.countDown = setInterval(this.countDown, 1000);
  }
  countDown() {
    const {
      days,
      hours,
      minutes,
      seconds,
    } = this.state;

    this.setState(formatDate(this.props.date));

    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
      clearInterval(this.countDown);
    }
  }
  render() {
    return (
      <div className="countdown">
        <div className="countdown__title">Time left to deadline:</div>
        <div className="countdown__time">
          {this.renderTimeLeft()}
        </div>
      </div>
    )
  }
}

export default Countdown
