import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">My Application</h2>
      <nav className="navbar">
        <ul className="nav-list">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact-us">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
