// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, role = null }) {
  const token    = localStorage.getItem('jwtToken');
  const userRole = localStorage.getItem('userRole');

  console.log('[ProtectedRoute]', { role, userRole, tokenExists: !!token });

  // Not logged in?
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Wrong role?
  if (role && userRole !== role) {
    // send them to their own dashboard
    const redirectTo = userRole === 'admin' ? '/admin' : '/employee';
    return <Navigate to={redirectTo} replace />;
  }

  // All good
  return children;
}
