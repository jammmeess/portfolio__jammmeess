import React from "react";
import navIcon from "../img/menu.png";
import Logo from "../img/portfoliologo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark text-white"
      id="nav"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} className="logo ms-3" />
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light" href="#about">
                .aboutMe( )
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#experience">
                .myExperience( )
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">
                .myProjects( )
              </a>
            </li>
            <li className=" nav-item">
              <a className="nav-link text-light " href="#contact">
                .contactMe( )
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
