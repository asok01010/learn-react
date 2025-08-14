import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col sidebar">
      <ul>
        <li>
          <NavLink to="/admin/dashboard" className="nav-button">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/blog" className="nav-button">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/user" className="nav-button">
            Users
          </NavLink>
          
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
