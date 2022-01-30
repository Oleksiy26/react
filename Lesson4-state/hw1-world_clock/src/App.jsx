import React from 'react';
import Clock from './Clock.jsx';

const App = () => (
  <>
    <Clock location="Chicago" offset={-6} />
    <Clock location="Kyiv" offset={+2} />
    <Clock location="London" offset={0} />
  </>
);
export default App;
