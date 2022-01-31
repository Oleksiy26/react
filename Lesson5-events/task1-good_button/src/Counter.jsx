import React from 'react';

const Counter = () => (
  <div
    className="fancy-button"
    onClick={() => {
      alert('Good job!');
    }}
  >
    Click me!
  </div>
);
export default Counter;
