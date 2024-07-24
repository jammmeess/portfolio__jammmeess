import React from "react";
import navIcon from "../img/menu.png";
import Logo from "../img/portfoliologo.png";

const Navbar = () => {
    return (
        <section className="navbarSec">
            <nav className="navbar">
                <div className="navbar__navCont">
                    <div className="navbar__navInner">
                        <img className="navbar__navLogo" src={Logo} alt="Site Logo" />
                        <ul className="navbar__navList">
                            <li className="navbar__navListItem"><a className="navbar__navLink" href="#About">about.me()</a></li>
                            <li className="navbar__navListItem"><a className="navbar__navLink" href="#Experience">my.experience()</a></li>
                            <li className="navbar__navListItem"><a className="navbar__navLink" href="#Projects">my.projects()</a></li>
                            <li className="navbar__navListItem"><a className="navbar__navLink" href="#Contact">contact.me()</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
