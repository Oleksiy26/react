// input: users[]
// output:jsx

import React from 'react';
import User from './User.jsx';

const UsersList = props => (
  <ul className="users">
    {props.users.map(user => (
      <User key={user.id} {...user} />
    ))}
  </ul>
);

export default UsersList;
