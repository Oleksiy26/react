import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.jsx';

library.add(fas);

const rootElement = document.querySelector('#root');

ReactDOM.render(<App />, rootElement);
