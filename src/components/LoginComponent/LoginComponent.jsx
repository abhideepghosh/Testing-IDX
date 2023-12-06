// Import the necessary modules.
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Create a function that is used to login a user.
const LoginComponent = () => {
  // Get the user's credentials from the form.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  // Handle the submit event of the form.
  const handleSubmit = (e) => {
    // Prevent the default action of the event.
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem(username));

    // Check if the user's data exists.
    if (userDetails) {
      // Check if the username and password are valid.
      // Check if the user's password matches the password in local storage.
      if (userDetails.password === password) {
        // Navigate to the dashboard page.
        sessionStorage.setItem(userDetails.name, username);
        navigate(`/dashboard/${userDetails.name}`);
      } else alert("Invalid Credentials"); // Show an error message.
    } else alert("Invalid Credentials"); // Show an error message.
  };

  useEffect(() => {
    if (sessionStorage.length > 0)
      navigate(`/dashboard/${Object.keys(sessionStorage)[0]}`);
  }, []);

  return (
    <div className="container">
      <h2>Login Form</h2>
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
