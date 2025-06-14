// src/ProfileCard.js
import React from 'react';
import './ProfileCard.css'; // Optional if you want to customize CSS further

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-img-wrapper">
          <img
            src="/images/profile-image/imageOfMe.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>
        <div className="profile-content">
          <h2 className="profile-name">Manuel Lipo</h2>
          <p className="profile-role">Waiter</p>
          <p className="profile-description">
            Passionate about building user-friendly, accessible, and modern interfaces with React and Tailwind CSS.
          </p>
          <div className="profile-icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
