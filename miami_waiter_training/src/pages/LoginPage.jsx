// src/pages/LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

import { API_BASE_URL } from '../config';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);

    // Clear any previous auth info
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userRole');

    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      // Always parse JSON, even on error, so we can inspect it
      const data = await res.json().catch(() => ({}));
      console.log('🛠️  Login response:', data);

      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      const { token, role } = data;

      // Ensure we actually got both values
      if (!token || !role) {
        throw new Error('Invalid login response from server');
      }

      // Persist for later
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('userRole',  role);

      // Redirect based on role
      if (role === 'admin') {
        navigate('/admin', { replace: true });
      } else {
        navigate('/employee', { replace: true });
      }

    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        {error && <div className="login-error">{error}</div>}

        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
