import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const onStatusOffline = () => {
      setStatus('offline');
    };

    const onStatusOnline = () => {
      setStatus('online');
    };
    window.addEventListener('online', onStatusOnline);
    window.addEventListener('offline', onStatusOffline);

    return () => {
      window.removeEventListener('online', onStatusOnline);
      window.removeEventListener('offline', onStatusOffline);
    };
  }, [status]);

  console.log(status);

  return status === 'online' ? (
    <div className="status ">{status}</div>
  ) : (
    <div className="status status_offline">{status}</div>
  );
};

// class ConnectionStatus extends React.Component {
//   state = {
//     status: 'online',
//     flag: true,
//   };

//   componentDidMount() {
//     window.addEventListener('online', this.onStatusOnline);
//     window.addEventListener('offline', this.onStatusOffline);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('online', this.onStatusOnline);
//     window.removeEventListener('offline', this.onStatusOffline);
//   }

//   onStatusOffline = () => {
//     this.setState({
//       status: 'offline',
//       flag: false,
//     });
//   };

//   onStatusOnline = () => {
//     this.setState({
//       status: 'online',
//       flag: true,
//     });
//   };

//   // onStatusChange = () => {
//   //    //   this.setState({
//   //     status: navigator.onLine ? 'online' : 'offline',
//   //   });

//   render() {
//     if (this.state.flag) {
//       return <div className="status ">{this.state.status}</div>;
//     }
//     return <div className="status status_offline">{this.state.status}</div>;
//   }
// }

export default ConnectionStatus;
