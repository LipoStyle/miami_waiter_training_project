import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="employee-dashboard-page">
      <h1>Welcome to your Training Dashboard</h1>
      <p>Select a section to begin your training:</p>

      <div className="employee-dashboard-cards">
        {/* Training card */}
        <div
          className="employee-dashboard-card"
          onClick={() => navigate('/employee/training')}
        >
          <h3>Training</h3>
          <p>Access your training modules and materials.</p>
        </div>

        {/* Cocktail Recipes card */}
        <div
          className="employee-dashboard-card"
          onClick={() => navigate('/employee/cocktail-recipes')}
        >
          <h3>Cocktail Recipes</h3>
          <p>Learn about all the cocktails we serve.</p>
        </div>

        {/* Other Employees card */}
        <div
          className="employee-dashboard-card"
          onClick={() => navigate('/employee/employees')}
        >
          <h3>Other Employees</h3>
          <p>View your colleagues and their roles.</p>
        </div>

        {/* My Profile card */}
        <div
          className="employee-dashboard-card"
          onClick={() => navigate('/employee/profile')}
        >
          <h3>My Profile</h3>
          <p>View your profile and personal information.</p>
        </div>
      </div>
    </div>
  );
}
