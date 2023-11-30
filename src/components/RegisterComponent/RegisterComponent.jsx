// Import the necessary modules.
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Create a function that is used to register a user.
const RegisterComponent = () => {
  // Get the navigate function from the useNavigate hook.
  const navigate = useNavigate();

  // Handle the submit event of the form.
  const handleSubmit = (e) => {
    // Prevent the default action of the event.
    e.preventDefault();

    // Check if the username already exists.
    if (localStorage.getItem(username)) {
      // Show an alert message.
      alert("Username already exists!");

      // Return from the function.
      return;
    }

    // Store the user's data in local storage.
    localStorage.setItem(
      username,
      JSON.stringify({
        name,
        password,
      })
    );

    // For testing whether the data is stored or not
    // console.log(JSON.parse(localStorage.getItem(username)));

    // Navigate to the login page.
    navigate("/");
  };

  // Create state variables for the user's name, username, and password.
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Return the JSX code for the register component.
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            minLength={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div id="emailHelp" className="form-text">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterComponent;
