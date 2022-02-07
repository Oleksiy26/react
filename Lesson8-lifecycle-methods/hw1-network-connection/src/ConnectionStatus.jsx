import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'Online',
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
    const condition = navigator.onLine ? 'online' : 'offline';
    const borderStyle = document.querySelector('.status');
    borderStyle.classList.toggle('status_offline');
    this.setState({
      status: condition[0].toUpperCase() + condition.slice(1),
    });
  };

  render() {
    return <div className="status ">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
