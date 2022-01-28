import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('2005-01-01T11:11:11.819Z'),
};

ReactDOM.render(<Greeting user={userInfo} />, rootElement);
