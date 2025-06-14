import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ViewEmployee.css';

import { API_BASE_URL } from '../../../config';

export default function ViewEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/employees/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch employee');
      }

      const data = await response.json();
      setEmployee(data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  if (!employee) {
    return <div>Loading employee information...</div>;
  }

  return (
    <div className="view-employee-page">
      <button className="back-button" onClick={() => navigate('/admin/employees')}>
        &larr; Back to Employees
      </button>

      <h1>{employee.name} {employee.surname}</h1>

      {employee.profile_image ? (
        <img
          src={employee.profile_image}
          alt={`${employee.name} ${employee.surname}`}
          className="employee-profile-image-large"
        />
      ) : (
        <div className="employee-profile-placeholder-large">No Image</div>
      )}

      <div className="employee-info-section">
        <p><strong>Role:</strong> {employee.job_role}</p>
        <p><strong>Status:</strong> {employee.employee_detail?.status}</p>
        <p><strong>Email:</strong> {employee.employee_contact?.email}</p>
        <p><strong>Phone:</strong> {employee.employee_contact?.phone_number}</p>
        <p><strong>Emergency Contact:</strong> {employee.employee_contact?.emergency_contact_name} ({employee.employee_contact?.emergency_contact_phone})</p>
        <p><strong>Hire Date:</strong> {employee.employee_detail?.hire_date}</p>
        <p><strong>Contract Type:</strong> {employee.employee_detail?.contract_type}</p>
        <p><strong>Working Hours:</strong> {employee.employee_detail?.working_hours_per_week}</p>
        <p><strong>Shift Preference:</strong> {employee.employee_detail?.shift_preference}</p>
        <p><strong>Username:</strong> {employee.employee_credential?.username}</p>
        <p><strong>Role:</strong> {employee.employee_credential?.role}</p>
      </div>
    </div>
  );
}
