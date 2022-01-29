import React from 'react';
import Counter from './Counter.jsx';

const App = () => (
  <>
    <Counter start={17} interval={1000} />
    <Counter start={3} interval={100} />
    <Counter start={-21} interval={500} />
  </>
);
export default App;
