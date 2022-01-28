import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('1982-01-26T18:40:00.000Z'),
};

ReactDOM.render(<Greeting user={userInfo} />, rootElement);
