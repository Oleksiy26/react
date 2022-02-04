import React from 'react';

const Offline = props => (
  <div className="status">
    <span className="status__text">Offline</span>
    <button className="status__btn" onClick={props.reconnect}>
      Reconnect
    </button>
  </div>
);
export default Offline;
