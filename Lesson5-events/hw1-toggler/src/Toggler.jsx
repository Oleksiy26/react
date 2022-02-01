import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btnText: 'Off',
      flag: true,
    };
  }

  toggleBtnText = () => {
    this.setState({
      flag: !this.state.flag,
      btnText: !this.state.flag ? 'Off' : 'On',
    });
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
