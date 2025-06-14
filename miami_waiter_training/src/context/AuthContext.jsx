// src/context/AuthContext.jsx  (example stub)
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);      // null or { id, name, role, … }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On mount, check if the user is already logged in
    // e.g. fetch('/api/auth/me') → { user: { … } }
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error('Not authenticated');
      })
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = async (credentials) => {
    // POST /api/auth/login → sets cookie, returns { user: { … } }
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(credentials),
    });
    if (!res.ok) throw new Error('Invalid credentials');
    const { user: loggedInUser } = await res.json();
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logout = async () => {
    // POST /api/auth/logout → clears session cookie
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
