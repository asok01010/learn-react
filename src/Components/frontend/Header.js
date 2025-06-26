import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <h2>My Application</h2>
          <div class="navbar">
            <ul  >
            <li> <NavLink to="/home">Home</NavLink></li>
            <li> <NavLink to="/about">About</NavLink></li>
            <li><NavLink to="contact-us">ContactUS</NavLink></li>
            </ul>
        </div>
    </>
  );
};
export default Header;
