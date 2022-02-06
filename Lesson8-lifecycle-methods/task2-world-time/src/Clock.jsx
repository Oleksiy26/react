import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityTime: moment().utcOffset(props.offset).format('h:mm:ss A'),
    };

    //  do not use like this
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        cityTime: moment().utcOffset(this.props.offset).format('h:mm:ss A'),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
