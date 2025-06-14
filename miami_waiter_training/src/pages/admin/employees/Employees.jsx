import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Employees.css';
import { toast } from 'react-toastify';

import { API_BASE_URL } from '../../../config';

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deletingEmployeeId, setDeletingEmployeeId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/employees`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleView = (id) => {
    navigate(`/admin/employees/${id}/view`);
  };

  const handleEdit = (id) => {
    navigate(`/admin/employees/${id}/edit`);
  };

  const handleDelete = async (id) => {
    try {
      setDeletingEmployeeId(id);

      const response = await fetch(`${API_BASE_URL}/api/v1/employees/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete employee');
      }

      toast.success('Employee deleted successfully!');

      setTimeout(() => {
        setDeletingEmployeeId(null);
        fetchEmployees();
      }, 500);
    } catch (error) {
      console.error('Error deleting employee:', error);
      toast.error('Error deleting employee');
      setDeletingEmployeeId(null);
    }
  };

  // Filter employees by name + surname
  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.name} ${employee.surname}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="employees-page">
      <h1>Employees</h1>
      <p>Manage your employee users below. You can create new employee accounts and view existing ones.</p>

      <button
        className="create-employee-button"
        onClick={() => navigate('/admin/employees/create')}
      >
        Create an Employee User
      </button>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search employees by name..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Employees list */}
      <div className="employees-card-section">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <div
              key={employee.id}
              className={`employee-card ${deletingEmployeeId === employee.id ? 'deleting' : ''}`}
            >
              {employee.profile_image ? (
                <img
                  src={employee.profile_image}
                  alt={`${employee.name} ${employee.surname}`}
                  className="employee-profile-image"
                />
              ) : (
                <div className="employee-profile-placeholder">No Image</div>
              )}

              <h3>
                {employee.name} {employee.surname}
              </h3>
              <p>Role: {employee.job_role}</p>
              <p>Status: {employee.employee_detail?.status}</p>
              <p>Email: {employee.employee_contact?.email}</p>
              <p>Phone: {employee.employee_contact?.phone_number}</p>

              <div className="employee-card-actions">
                <button onClick={() => handleView(employee.id)}>View</button>
                <button onClick={() => handleEdit(employee.id)}>Edit</button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: '1rem', fontStyle: 'italic', color: '#6b7280' }}>
            No employees found.
          </p>
        )}
      </div>
    </div>
  );
}
