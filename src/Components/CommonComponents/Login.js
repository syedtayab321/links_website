import React, { useState } from 'react';
import axiosInstance from './../../api/axiosInstance';
import './../../assets/css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('login/', { email, password });
      // Redirect or handle success
      console.log('Logged in successfully', response);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
      <div className='login-main-container'>
        <div className="login-container">
          <div className="login-box">
            <h2>Login</h2>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </form>
            <div className="login-footer">
              <a href="/forgot-password">Forgot Password?</a>
              <p>Don't have an account? <a href="/registration">Register</a></p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
