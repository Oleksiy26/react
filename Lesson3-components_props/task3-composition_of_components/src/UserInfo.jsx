import React from 'react';
import Avatar from './Avatar.jsx';

const UsrInfo = props => (
  <div className="user-info">
    <Avatar avatarUrl={props.author.avatarUrl} name={props.author.name} />
    <div className="user-info__name">{props.author.name}</div>
  </div>
);
export default UsrInfo;
