import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
function Navbar() {
  
  return (
    <header
        style={{ background: "#001b36", position: "relative", top: 0 }}
        className="s-header"
      >
        <div className="row s-header__inner width-sixteen-col">
          <div className="s-header__block">
            <div className="s-header__logo">
              <NavLink className="logo" to="/">
                <img src={logo} alt="Homepage" />
              </NavLink>
            </div>
            <a className="s-header__menu-toggle" href="#">
              <span>Menu</span>
            </a>
          </div>
          <nav className="s-header__nav">
            <ul className="s-header__menu-links">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              {/* <li>
                <NavLink to="/services">Services</NavLink>
              </li> */}
              {/* <li>
                <NavLink to="/investors">Investors</NavLink>
              </li> */}
              {/* <li>
                <NavLink to="/blog">Blog</NavLink>
              </li> */}
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>
            </ul>
            <div className="s-header__contact">
              <NavLink
                to="/contact"
                className="btn btn--primary s-header__contact-btn"
              >
                Let's Work Together
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
  );
}

export default Navbar;
