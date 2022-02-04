import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = { isOnline: false };
  }

  handleReconnect = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return <>{this.state.isOnline ? <Online /> : <Offline reconnect={this.handleReconnect} />}</>;
  }
}
export default Status;
