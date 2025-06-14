import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEmployee.css';

import { API_BASE_URL } from '../../../config';

export default function CreateEmployee() {
  const navigate = useNavigate();

  // Basic fields
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [description, setDescription] = useState('');
  const [profileImage, setProfileImage] = useState('');

  // Contact
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');

  // Detail
  const [hireDate, setHireDate] = useState('');
  const [status, setStatus] = useState('inactive');
  const [contractType, setContractType] = useState('');
  const [workingHoursPerWeek, setWorkingHoursPerWeek] = useState('');
  const [shiftPreference, setShiftPreference] = useState('');

  // Credential
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/employees`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          surname,
          job_role: jobRole,
          description,
          profile_image: profileImage,
          employee_contact_attributes: {
            phone_number: phoneNumber,
            email,
            emergency_contact_name: emergencyContactName,
            emergency_contact_phone: emergencyContactPhone,
          },
          employee_detail_attributes: {
            hire_date: hireDate,
            status,
            contract_type: contractType,
            working_hours_per_week: workingHoursPerWeek,
            shift_preference: shiftPreference,
          },
          employee_credential_attributes: {
            username,
            password,
            role,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create employee');
      }

      alert('Employee created successfully!');
      // Optionally redirect back to /admin/employees
      navigate('/admin/employees');

    } catch (error) {
      console.error('Error creating employee:', error);
      alert('Error creating employee');
    }
  };

  return (
    <div className="create-employee-page">
      <h1>Create New Employee</h1>
      <form onSubmit={handleSubmit}>
        {/* Add all fields here, grouped nicely */}
        <h2>Basic Info</h2>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        <input placeholder="Job Role" value={jobRole} onChange={(e) => setJobRole(e.target.value)} required />
        <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input placeholder="Profile Image URL" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} />

        <h2>Contact Info</h2>
        <input placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Emergency Contact Name" value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} />
        <input placeholder="Emergency Contact Phone" value={emergencyContactPhone} onChange={(e) => setEmergencyContactPhone(e.target.value)} />

        <h2>Employment Details</h2>
        <input type="date" value={hireDate} onChange={(e) => setHireDate(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="inactive">Inactive</option>
          <option value="active">Active</option>
        </select>
        <input placeholder="Contract Type" value={contractType} onChange={(e) => setContractType(e.target.value)} />
        <input placeholder="Working Hours Per Week" value={workingHoursPerWeek} onChange={(e) => setWorkingHoursPerWeek(e.target.value)} />
        <input placeholder="Shift Preference" value={shiftPreference} onChange={(e) => setShiftPreference(e.target.value)} />

        <h2>Account Credentials</h2>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
}
