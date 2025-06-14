import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Adminlayout.css';

export default function AdminLayout() {
  const location = useLocation();

  const isActive = (path) => location.pathname === `/admin${path}`;

  return (
    <div className="admin-layout">
      <nav className="admin-sidebar">
        <h2 className="admin-sidebar-title">Admin Panel</h2>
        <ul className="admin-sidebar-menu">
          <li className={isActive('/dashboard') ? 'active' : ''}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li className={isActive('/employees') ? 'active' : ''}>
            <Link to="/admin/employees">Employees</Link>
          </li>
          <li className={isActive('/drink-recipes') ? 'active' : ''}>
            <Link to="/admin/drink-recipes">Drink Recipes</Link>
          </li>
          <li className={isActive('/dessert-recipes') ? 'active' : ''}>
            <Link to="/admin/dessert-recipes">Dessert Recipes</Link>
          </li>
          <li className={isActive('/food-recipes') ? 'active' : ''}>
            <Link to="/admin/food-recipes">Food Recipes</Link>
          </li>
        </ul>
      </nav>

      <main className="admin-main">
        <Outlet /> {/* Child pages will be rendered here */}
      </main>
    </div>
  );
}
