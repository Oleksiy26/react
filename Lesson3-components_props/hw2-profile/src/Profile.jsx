import React from 'react';
import moment from 'moment';

const convertedDate = date => moment(date).format('DD MMM YY');

function Profile(props) {
  const { firstName, lastName, birthDate, birthPlace } = props.userData;
  return (
    <div className="profile">
      <div className="profile__name">{`${firstName} ${lastName}`}</div>
      <div className="profile__birth">{`Was born ${convertedDate(
        birthDate,
      )} in ${birthPlace}`}</div>
    </div>
  );
}

export default Profile;
