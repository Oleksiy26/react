import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    const { start, interval } = props;
    this.state = {
      counter: start,
    };
    //  do not use like this
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, interval);
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
