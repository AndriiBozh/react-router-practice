import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts" end>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" end>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
