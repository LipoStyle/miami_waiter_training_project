// src/pages/employee/EmployeeLayout.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './EmployeeLayout.css'; // use this new CSS file

export default function EmployeeLayout() {
  return (
    <div className="employee-layout">
      <nav className="employee-sidebar">
        <h2 className="employee-sidebar-title">Waiter Training</h2>
        <ul className="employee-sidebar-menu">
          <li>
            <Link to="dashboard" className="employee-sidebar-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="training" className="employee-sidebar-link">
              Training
            </Link>
          </li>
          <li>
            <Link to="cocktail-recipes" className="employee-sidebar-link">
              Cocktail Recipes
            </Link>
          </li>
          <li>
            <Link to="employees" className="employee-sidebar-link">
              Other Employees
            </Link>
          </li>
          <li>
            <Link to="profile" className="employee-sidebar-link">
              My Profile
            </Link>
          </li>
        </ul>
      </nav>

      <main className="employee-main">
        <Outlet />
      </main>
    </div>
  );
}
