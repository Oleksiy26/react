import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.onStatusChange);
    window.addEventListener('offline', this.onStatusChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onStatusChange);
    window.removeEventListener('offline', this.onStatusChange);
  }

  onStatusChange = () => {
    const borderStyle = document.querySelector('.status');
    borderStyle.classList.toggle('status_offline');
    this.setState({
      status: navigator.onLine ? 'online' : 'offline',
    });
  };

  render() {
    return <div className="status ">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
