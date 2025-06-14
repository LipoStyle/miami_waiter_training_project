import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const navigate = useNavigate();
  const token    = localStorage.getItem('jwtToken');

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userRole');
    navigate('/login', { replace: true });
  };

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <NavLink to="/" className="navbar__logo">MIAMI Lounge</NavLink>
      </div>
      <nav className="navbar__nav">
        <NavLink to="/"          className="navbar__link" end>Home</NavLink>
      </nav>
      <div className="navbar__cta">
        {token ? (
          <button onClick={handleLogout} className="navbar__btn">
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="navbar__btn">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
}
