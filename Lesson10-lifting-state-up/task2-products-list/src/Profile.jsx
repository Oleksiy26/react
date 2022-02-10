import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({ userData, handleChange }) => (
  <div className="coloumn">
    <UserForm userData={userData} handleChange={handleChange} />
  </div>
);

export default Profile;
