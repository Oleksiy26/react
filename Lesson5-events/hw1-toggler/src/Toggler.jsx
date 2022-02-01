import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Off',
      active: false,
    };
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active,
      value: !this.state.active ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.handleClick}>
        {this.state.value}
      </button>
    );
  }
}

export default Toggler;
