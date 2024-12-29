import React, { useState } from 'react';
import axiosInstance from './../../api/axiosInstance';
import './registration.css';

const BuyerRegistration = ({ onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const validationErrors = {};
    if (!formData.fullName.trim()) validationErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axiosInstance.post('register/buyer/', formData);
      setSuccessMessage('Registration successful!');
      setErrors({});
      setFormData({ fullName: '', email: '', companyName: '', password: '' });
    } catch (error) {
      setSuccessMessage('');
      setErrors({ apiError: 'An error occurred while registering. Please try again.' });
    }
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Buyer Registration</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errors.apiError && <div className="alert alert-danger">{errors.apiError}</div>}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name (Optional)</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="form-control"
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Register as Buyer
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-block mt-3"
          onClick={onBack}
        >
          Go Back
        </button>
      </form>
    </div>
  );
};

export default BuyerRegistration;
