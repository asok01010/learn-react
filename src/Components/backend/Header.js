import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    navigate("/admin/login");
  };

  return (
    <header className="header">
      <h2 className="logo">Admin Dashboard</h2>
      <nav className="navbar">
        <button className="logout-btn" onClick={handleLogout}>
          Log out
        </button>
      </nav>
    </header>
  );
};

export default Header;
