import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DashboardComponent = () => {
  const { name } = useParams();
  const username = sessionStorage.getItem(name);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    if (!username) navigate("/");
  }, []);

  return (
    <div className="container">
      <p>
        Hello {name}, your username is {username}
      </p>
      <button onClick={handleLogout} type="button" className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default DashboardComponent;
