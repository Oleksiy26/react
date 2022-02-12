import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './fontawesome.js';
import Expand from './Expand.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Expand title="Some title" />, rootElement);
