import React, { Component } from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: 'Off',
      flag: true,
    };
  }

  handleClick = () => {
    this.setState({
      flag: !this.state.flag,
      btnText: !this.state.flag ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.handleClick}>
        {this.state.btnText}
      </button>
    );
  }
}

export default Toggler;
