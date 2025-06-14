import React, { useEffect, useState } from 'react';
import './EmployeeProfile.css';

import { API_BASE_URL } from '../../../config';

export default function EmployeeProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        throw new Error('No token found. Please log in again.');
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      setProfile(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError(err.message || 'Error loading profile');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="employee-profile-page">Loading profile...</div>;
  }

  if (error) {
    return <div className="employee-profile-page">{error}</div>;
  }

  return (
    <div className="employee-profile-page">
      <h1>My Profile</h1>

      {profile.profile_image ? (
        <img
          src={profile.profile_image}
          alt={`${profile.name} ${profile.surname}`}
          className="employee-profile-image"
        />
      ) : (
        <div className="employee-profile-placeholder">No Image</div>
      )}

      <h2>
        {profile.name} {profile.surname}
      </h2>
      <p>
        <strong>Role:</strong> {profile.job_role}
      </p>
      <p>
        <strong>Description:</strong> {profile.description || '-'}
      </p>

      <h3>Contact Information</h3>
      <p>
        <strong>Email:</strong> {profile.employee_contact?.email}
      </p>
      <p>
        <strong>Phone:</strong> {profile.employee_contact?.phone_number}
      </p>
      <p>
        <strong>Emergency Contact:</strong>{' '}
        {profile.employee_contact?.emergency_contact_name} (
        {profile.employee_contact?.emergency_contact_phone})
      </p>

      <h3>Job Details</h3>
      <p>
        <strong>Hire Date:</strong> {profile.employee_detail?.hire_date}
      </p>
      <p>
        <strong>Status:</strong> {profile.employee_detail?.status}
      </p>
      <p>
        <strong>Contract Type:</strong> {profile.employee_detail?.contract_type}
      </p>
      <p>
        <strong>Working Hours:</strong> {profile.employee_detail?.working_hours_per_week} hours/week
      </p>
      <p>
        <strong>Shift Preference:</strong> {profile.employee_detail?.shift_preference}
      </p>

      <h3>Account Information</h3>
      <p>
        <strong>Username:</strong> {profile.employee_credential?.username}
      </p>
      <p>
        <strong>Role:</strong> {profile.employee_credential?.role}
      </p>
    </div>
  );
}
