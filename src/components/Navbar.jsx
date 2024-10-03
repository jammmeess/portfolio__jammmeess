import React, { useState, useEffect } from "react";
import navIcon from "../img/navbar/menu.png";
import Resume from "../files/Bomediano_Resume.pdf"
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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="navbarSec">
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__navCont">
                    <div className="navbar__navInner">
                        <img className="navbar__navLogo" src={Logo} alt="Site Logo" />
                        <div className="navbar__linkWrap">
                            <ul className="navbar__navList">
                                <li className="navbar__navListItem"><a className="navbar__navLink" href="#About">about.me()</a></li>
                                <li className="navbar__navListItem"><a className="navbar__navLink" href="#Experience">my.experience()</a></li>
                                <li className="navbar__navListItem"><a className="navbar__navLink" href="#Projects">my.projects()</a></li>
                                <li className="navbar__navListItem"><a className="navbar__navLink" href="#Contact">contact.me()</a></li>
                            </ul>
                            {/* <a href={Resume} download >
                                <button className="commonBtn__primaryBtn navBtn">
                                    Download Resume
                                </button> */}
                            {/* </a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
