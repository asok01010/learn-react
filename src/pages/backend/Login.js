import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { doLogin } from '../../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  }

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  }

  // Handle Form Submission
  const handleBtnClick = () => {
    let error = false;
    if (email === '') {
      emailError = "Email is required";
      setEmailError("Email is required");
      error = true;
    } else if (password === '') {
      setPasswordError("Password is required");
      error = true;
    }

    if (error) {
      return;
    }
    const loginStatus = doLogin(email, password);
    if (loginStatus) {
      navigate('/admin/dashboard');
    } else {
      setLoginError('Invalid email or password');
    }

  }

  return (
    <div className="form-container" id="login-form">
      <h2>Admin Login</h2>
      <form>
        <div className="input-field">
          <label className="label" htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => handleEmailChange(e)}
            value={email}
          />

          <div style={{color:'red'}}> {emailError}</div>
          <br></br>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="password-input"
            placeholder="Enter your password"
            onChange={(p) => handlePasswordChange(p)}
            value={password}
          />
          <div style={{color:'red'}}> {passwordError}</div>
          <br></br>
          <div style={{color:'red'}}> {loginError}</div>
          <button onClick={() => handleBtnClick()} type="button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
