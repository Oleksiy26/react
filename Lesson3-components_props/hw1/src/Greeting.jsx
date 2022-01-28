import React from 'react';
import moment from 'moment';

const age = date => moment(new Date()).diff(moment(date), 'years');

function Greeting(props) {
  const { firstName, lastName, birthDate } = props;
  return (
    <div className="greeting">{`My name is ${firstName} ${lastName}. I'm ${age(
      birthDate,
    )} years old`}</div>
  );
}

export default Greeting;
