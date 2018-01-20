import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  componentDidMount() {
    const now = new Date();
  }
  render() {
    return (
      <div className="countdown">
        {this.props.date}
      </div>
    )
  }
}

export default Countdown
