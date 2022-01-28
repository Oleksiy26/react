import React from 'react';
import moment from 'moment';

const age = date => moment(date).fromNow(true);

function Greeting(props) {
  const { firstName, lastName, birthDate } = props.user;
  return (
    <div className="greeting">{`My name is ${firstName} ${lastName}. I'm ${age(
      birthDate,
    )} old `}</div>
  );
}

export default Greeting;
