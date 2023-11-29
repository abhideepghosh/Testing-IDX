import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem(username));
    if (userDetails) {
      if (userDetails.password === password) {
        navigate("/dashboard");
      } else alert("Invalid Credentials");
    } else alert("Invalid Credentials");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            value={username}
            onChange={handleUsername}
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="emailPassword" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={handlePassword}
            type="password"
            className="form-control"
            id="emailPassword"
          />
          <div id="emailHelp" className="form-text">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
