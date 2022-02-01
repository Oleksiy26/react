import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btnText: 'Off',
      active: false,
    };
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active,
      btnText: !this.state.active ? 'On' : 'Off',
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
