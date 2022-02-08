import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';

const rootElement = document.querySelector('#root');

const user = {
  name: 'Petro',
  student: 'yes',
  occupation: 'Berlin',
  about: 'fuck you',
};

ReactDOM.render(<App userInfo={user} />, rootElement);
