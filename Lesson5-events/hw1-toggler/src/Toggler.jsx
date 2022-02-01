import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: 'Off',
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
