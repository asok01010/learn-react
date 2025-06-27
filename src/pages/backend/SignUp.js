import React, { useState } from "react";
const SignUp = () => {
  const [name, setFName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNameChange = (n) => {
    const inputName = n.target.value;
    setFName(inputName);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const handlePasswordChange = (p) => {
    const inputPassword = p.target.value;
    setPassword(inputPassword);
  };

  const handleBtnClick = () => {
    // Handle sign-up logic here
    console.log("User signed up with the following details:");
    console.log("Full Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="form-container">
      <form>
        <h1>Sign Up</h1>
        <br />
        <div className="input-container">
          <label htmlFor="Name">Full Name</label>
          <input
            type="text"
            id="name"
            className="name-input"
            placeholder="Enter your full name"
            onChange={(n) => handleNameChange(n)}
            value={name}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="email-input"
            placeholder="Enter your email"
            onChange={(e) => handleEmailChange(e)}
            value={email}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="password-input"
            placeholder="Enter your password"
            onChange={(p) => handlePasswordChange(p)}
            value={password}
          />
          <br />
          <button onClick={() => handleBtnClick()} type="button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
