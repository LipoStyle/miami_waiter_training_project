// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ✅ Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ✅ BrowserRouter must be the top‐level wrapper */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
