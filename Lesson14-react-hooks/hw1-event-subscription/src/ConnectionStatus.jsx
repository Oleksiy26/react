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

export default ConnectionStatus;
