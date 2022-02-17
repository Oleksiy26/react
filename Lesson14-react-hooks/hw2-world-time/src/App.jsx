import React, { useState } from 'react';
import Clock from './Clock.jsx';

const App = () => {
  const [visible, setVisibility] = useState(true);

  return (
    <div className="wrapper">
      <button className="btn" onClick={() => setVisibility(!visible)}>
        Show / Hide
      </button>
      {visible && (
        <>
          <Clock location="Chicago" offset={-6} />
          <Clock location="Kyiv" offset={+2} />
          <Clock location="London" offset={0} />
        </>
      )}
    </div>
  );
};

export default App;
