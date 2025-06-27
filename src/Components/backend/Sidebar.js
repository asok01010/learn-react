import { NavLink } from "react-router";

const Sidebar = () => {
  return(
    <>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink to="/admin/dashboard" activeClassName="active-link">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/contact-us" activeClassName="active-link">Contact Us</NavLink>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </>
  );
    
};
export default Sidebar;
