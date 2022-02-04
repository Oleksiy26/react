import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NumbersList from './NumbersList.jsx';

const rootElement = document.querySelector('#root');

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ReactDOM.render(<NumbersList numbers={numbersArr} />, rootElement);
