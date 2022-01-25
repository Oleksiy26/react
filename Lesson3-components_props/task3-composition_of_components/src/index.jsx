import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment.jsx';

const rootElement = document.querySelector('#root');

const userInfo = { name: 'Tom', avatarUrl: 'https://avatars1.githubusercontent.com/u' };

ReactDOM.render(
  <Comment user={userInfo} text="Good job!" date={new Date('2022-01-25T20:20:20.500Z')} />,
  rootElement,
);
