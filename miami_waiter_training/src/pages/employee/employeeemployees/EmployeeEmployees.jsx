import React, { useEffect, useState } from 'react';
import './EmployeeEmployees.css';

import { API_BASE_URL } from '../../../config';

export default function EmployeeEmployees() {
  const [employees, setEmployees] = useState([]);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfileAndEmployees();
  }, []);

  const fetchProfileAndEmployees = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) throw new Error('No token found. Please log in again.');

      // Fetch current profile
      const profileRes = await fetch(`${API_BASE_URL}/api/v1/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!profileRes.ok) throw new Error('Failed to fetch profile');
      const profileData = await profileRes.json();
      setCurrentEmployeeId(profileData.id);

      // Fetch all employees
      const employeesRes = await fetch(`${API_BASE_URL}/api/v1/employees`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!employeesRes.ok) throw new Error('Failed to fetch employees');
      const employeesData = await employeesRes.json();
      setEmployees(employeesData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message || 'Error loading employees');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="other-employees-page">Loading employees...</div>;
  }

  if (error) {
    return <div className="other-employees-page">{error}</div>;
  }

  // Filter out myself
  const otherEmployees = employees
    .filter((emp) => emp.id !== currentEmployeeId)
    .filter((emp) =>
      `${emp.name} ${emp.surname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="other-employees-page">
      <h1>Our Team</h1>
      <p>Explore your fellow team members below.</p>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search employees by name..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="other-employees-card-section">
        {otherEmployees.length > 0 ? (
          otherEmployees.map((employee) => (
            <div key={employee.id} className="other-employee-card">
              {employee.profile_image ? (
                <img
                  src={employee.profile_image}
                  alt={`${employee.name} ${employee.surname}`}
                  className="other-employee-image"
                />
              ) : (
                <div className="other-employee-placeholder">
                  {employee.name?.charAt(0)}
                  {employee.surname?.charAt(0)}
                </div>
              )}

              <h3>
                {employee.name} {employee.surname}
              </h3>
              <p>Role: {employee.job_role}</p>
              <p>Status: {employee.employee_detail?.status || 'Unknown'}</p>
              <p>Email: {employee.employee_contact?.email}</p>
              <p>Phone: {employee.employee_contact?.phone_number}</p>
            </div>
          ))
        ) : (
          <p style={{ padding: '1rem', fontStyle: 'italic', color: '#6b7280' }}>
            No matching employees found.
          </p>
        )}
      </div>
    </div>
  );
}
