import React, { useState, useEffect } from "react";
import navIcon from "../img/navbar/menu.png";
import Resume from "../files/Bomediano_Resume.pdf";
import Logo from "../img/navbar/portfoliologo.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <section className="navbarSec">
            <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
                <div className="navbar__navCont">
                    <div className="navbar__navInner">
                        <a href="#">
                            <img className="navbar__navLogo" src={Logo} alt="Site Logo" />
                        </a>
                        <div className="navbar__linkWrap">
                            <ul className="navbar__navList">
                                <li className="navbar__navListItem">
                                    <a
                                        className="navbar__navLink"
                                        href="#About"
                                        onClick={(e) => handleSmoothScroll(e, "About")}
                                    >
                                        About the Couple
                                    </a>
                                </li>
                                <li className="navbar__navListItem">
                                    <a
                                        className="navbar__navLink"
                                        href="#Skills"
                                        onClick={(e) => handleSmoothScroll(e, "Skills")}
                                    >
                                        Principal Sponsors
                                    </a>
                                </li>
                                <li className="navbar__navListItem">
                                    <a
                                        className="navbar__navLink"
                                        href="#Experience"
                                        onClick={(e) => handleSmoothScroll(e, "Experience")}
                                    >
                                        Secondary S
                                    </a>
                                </li>
                                <li className="navbar__navListItem">
                                    <a
                                        className="navbar__navLink"
                                        href="#Projects"
                                        onClick={(e) => handleSmoothScroll(e, "Projects")}
                                    >
                                        my.projects()
                                    </a>
                                </li>
                                <li className="navbar__navListItem">
                                    <a
                                        className="navbar__navLink"
                                        href="#Contact"
                                        onClick={(e) => handleSmoothScroll(e, "Contact")}
                                    >
                                        contact.me()
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
