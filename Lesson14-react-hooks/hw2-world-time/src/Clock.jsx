import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './clock.scss';

const Clock = ({ offset, location }) => {
  const [cityTime, setCityTime] = useState(moment().utcOffset(offset).format('h:mm:ss A'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCityTime(moment().utcOffset(offset).format('h:mm:ss A'));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{cityTime}</div>
    </div>
  );
};

export default Clock;
