import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditEmployee.css';
import { toast } from 'react-toastify';

import { API_BASE_URL } from '../../../config';

export default function EditEmployee() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: employee.name,
          surname: employee.surname,
          job_role: employee.job_role,
          description: employee.description,
          profile_image: employee.profile_image,
          employee_contact_attributes: {
            id: employee.employee_contact?.id, // REQUIRED!
            phone_number: employee.employee_contact?.phone_number,
            email: employee.employee_contact?.email,
            emergency_contact_name: employee.employee_contact?.emergency_contact_name,
            emergency_contact_phone: employee.employee_contact?.emergency_contact_phone,
          },
          employee_detail_attributes: {
            id: employee.employee_detail?.id, // REQUIRED!
            hire_date: employee.employee_detail?.hire_date,
            status: employee.employee_detail?.status,
            contract_type: employee.employee_detail?.contract_type,
            working_hours_per_week: employee.employee_detail?.working_hours_per_week,
            shift_preference: employee.employee_detail?.shift_preference,
          },
          employee_credential_attributes: {
            id: employee.employee_credential?.id, // REQUIRED!
            username: employee.employee_credential?.username,
            // Do not send password unless user changes it
            role: employee.employee_credential?.role,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update employee');
      }

      toast.success('Employee updated successfully!');
      navigate('/admin/employees');
    } catch (error) {
      console.error('Error updating employee:', error);
      toast.error('Error updating employee');
    }
  };



  if (!employee) {
    return <div>Loading employee data...</div>;
  }

  const handleChange = (field, value, subfield = null) => {
    if (subfield) {
      setEmployee((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          [subfield]: value,
        },
      }));
    } else {
      setEmployee((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  return (
    <div className="edit-employee-page">
      <button className="back-button" onClick={() => navigate('/admin/employees')}>
        &larr; Back to Employees
      </button>

      <h1>Edit Employee</h1>

      <form onSubmit={handleSubmit}>
        <h2>Basic Info</h2>
        <input value={employee.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Name" />
        <input value={employee.surname} onChange={(e) => handleChange('surname', e.target.value)} placeholder="Surname" />
        <input value={employee.job_role} onChange={(e) => handleChange('job_role', e.target.value)} placeholder="Job Role" />
        <input value={employee.description} onChange={(e) => handleChange('description', e.target.value)} placeholder="Description" />
        <input value={employee.profile_image} onChange={(e) => handleChange('profile_image', e.target.value)} placeholder="Profile Image URL" />

        <h2>Contact Info</h2>
        <input value={employee.employee_contact?.phone_number || ''} onChange={(e) => handleChange('employee_contact', e.target.value, 'phone_number')} placeholder="Phone Number" />
        <input value={employee.employee_contact?.email || ''} onChange={(e) => handleChange('employee_contact', e.target.value, 'email')} placeholder="Email" />
        <input value={employee.employee_contact?.emergency_contact_name || ''} onChange={(e) => handleChange('employee_contact', e.target.value, 'emergency_contact_name')} placeholder="Emergency Contact Name" />
        <input value={employee.employee_contact?.emergency_contact_phone || ''} onChange={(e) => handleChange('employee_contact', e.target.value, 'emergency_contact_phone')} placeholder="Emergency Contact Phone" />

        <h2>Employment Details</h2>
        <input type="date" value={employee.employee_detail?.hire_date || ''} onChange={(e) => handleChange('employee_detail', e.target.value, 'hire_date')} />
        <select value={employee.employee_detail?.status || 'inactive'} onChange={(e) => handleChange('employee_detail', e.target.value, 'status')}>
          <option value="inactive">Inactive</option>
          <option value="active">Active</option>
        </select>
        <input value={employee.employee_detail?.contract_type || ''} onChange={(e) => handleChange('employee_detail', e.target.value, 'contract_type')} placeholder="Contract Type" />
        <input value={employee.employee_detail?.working_hours_per_week || ''} onChange={(e) => handleChange('employee_detail', e.target.value, 'working_hours_per_week')} placeholder="Working Hours" />
        <input value={employee.employee_detail?.shift_preference || ''} onChange={(e) => handleChange('employee_detail', e.target.value, 'shift_preference')} placeholder="Shift Preference" />

        <h2>Account Credentials</h2>
        <input value={employee.employee_credential?.username || ''} onChange={(e) => handleChange('employee_credential', e.target.value, 'username')} placeholder="Username" />
        <select value={employee.employee_credential?.role || 'employee'} onChange={(e) => handleChange('employee_credential', e.target.value, 'role')}>
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}
