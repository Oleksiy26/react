import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);
    // ---------------------from task
    // const getTimeWithOffset = timeZone => {
    //   const currentTime = new Date();
    //   const utcOffset = currentTime.getTimezoneOffset() / 60;
    //   console.log(utcOffset);
    //   return new Date(currentTime.setHours(currentTime.getHours() + timeZone + utcOffset));
    // };

    // --------------refactored--------------------

    this.state = {
      cityTime: moment().utcOffset(props.offset).format('h:mm:ss A'),
    };

    //  do not use like this

    setInterval(() => {
      this.setState({
        cityTime: moment().utcOffset(props.offset).format('h:mm:ss A'),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.cityTime}</div>
      </div>
    );
  }
}

export default Clock;
