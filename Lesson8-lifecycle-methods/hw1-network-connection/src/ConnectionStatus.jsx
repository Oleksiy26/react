import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
    flag: true,
  };

  componentDidMount() {
    window.addEventListener('online', this.onStatusOnline);
    window.addEventListener('offline', this.onStatusOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onStatusOnline);
    window.removeEventListener('offline', this.onStatusOffline);
  }

  onStatusOffline = () => {
    this.setState({
      status: 'offline',
      flag: false,
    });
  };

  onStatusOnline = () => {
    this.setState({
      status: 'online',
      flag: true,
    });
  };

  render() {
    if (this.state.flag) {
      return <div className="status ">{this.state.status}</div>;
    }
    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
