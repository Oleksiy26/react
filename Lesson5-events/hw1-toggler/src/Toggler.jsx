import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      btnText: 'Off',
      flag: true,
    };
  }

  toggleBtnText = event => {
    if (event.target.textContent.toLowerCase() === 'off') {
      this.setState({
        btnText: 'On',
      });
    }
    if (event.target.textContent.toLowerCase() === 'on') {
      this.setState({
        btnText: 'Off',
      });
    }
  };

  render() {
    return (
      <button className="toggler" onClick={this.toggleBtnText}>
        {this.state.btnText}
      </button>
    );
  }
}

export default Toggler;
