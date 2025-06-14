import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome, administrator! Here you can manage employees and training.</p>

      <div className="card-section">
        <div className="card" onClick={() => navigate('/admin/employees')}>
          <h3>Employees</h3>
          <p>Manage your employees</p>
        </div>

        <div className="card" onClick={() => navigate('/admin/drink-recipes')}>
          <h3>Drink Recipes</h3>
          <p>Manage drink recipes</p>
        </div>

        <div className="card" onClick={() => navigate('/admin/dessert-recipes')}>
          <h3>Dessert Recipes</h3>
          <p>Manage dessert recipes</p>
        </div>

        <div className="card" onClick={() => navigate('/admin/food-recipes')}>
          <h3>Food Recipes</h3>
          <p>Manage food recipes</p>
        </div>
      </div>
    </div>
  );
}
