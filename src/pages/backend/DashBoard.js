import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("AUTH_TOKEN");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard of our application!</p>
        <p>Here you can manage various aspects of the application.</p>
        <p>Feel free to explore the available features and functionalities.</p>
        <p>To get started, you can navigate to the following sections:</p>
        <p><a href="/admin/users">Manage Users</a></p>
        <p><a href="/admin/settings">Application Settings</a></p>
      </div>
    </div>
  );
};

export default Dashboard;
