import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };
  const handlePasswordChange = (p) => {
    const inputPassword = p.target.value;
    setPassword(inputPassword);
  };
  const handleBtnClick = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);
  };
  return (
    <div className="form-container">
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
          <br></br>
          <button onClick={() => handleBtnClick()} type="button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
