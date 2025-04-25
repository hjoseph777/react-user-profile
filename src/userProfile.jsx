import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css';

const UserProfile = ({ name, profilePicture, bio }) => {
  return (
    <div className="user-profile">
      <div className="profile-container">
        <img 
          src={profilePicture}
          alt={`${name}'s profile`}
          className="profile-picture"
        />
        <h2 className="user-name">{name}</h2>
        <p className="user-bio">{bio}</p>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default UserProfile;
