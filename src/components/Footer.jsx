import React from "react";
import LinkedIn from "../img/footer/linkedIn.svg";
import Email from "../img/footer/email.svg";
import Github from "../img/footer/github.svg";
import Resume from "../files/Bomediano_Resume.pdf"

const Footer = () => {
    return (
        <section className="footerSec" id="Contact">
          <div className="footerSec__inner">
            <div className="footerSec__contntWrapper">
              <h2 className="footerSec__contntTtl">Get<span className="txtBlue">.inTouch()</span></h2>
              <div className="blueDvdr"></div>
              <p className="footerSec__contntTxt">I'm a front-end web developer based on the Philippines, and this site is one of my projects crafted with ReactJS.
              <br/>
              <br/>Eager to learn more? Let's connect! Feel free to reach out to me through the social icons below.</p>
              <div className="footerSec__linkWrapper">
                <a href="mailto:james_bomediano@hotmail.com" target="_blank"><img className="footerSec__socialIcon" src={Email} alt=""/></a>
                <a href="https://www.linkedin.com/in/kristoffer-james-bomediano-020214271/" target="blank"><img className="footerSec__socialIcon" src={LinkedIn} alt=""/></a>
                <a href="https://github.com/jammmeess?tab=repositories" target="blank"><img className="footerSec__socialIcon" src={Github} alt=""/></a>
              </div>
            </div>

            <div className="footerSec__cntctWrapper">
              <h3 className="footerSec__cntctTtl">My Contact <br/> Number:</h3>
              <p className="footerSec__cntctNo">+63 960-269-4856</p>
            </div>

            <div className="footerSec__cntctWrapper">
              <h3 className="footerSec__cntctTtl">Download My <br/> Resume</h3>
              <a className="footerSec__rsmDlLink" href={Resume} download>
                <p className="footerSec__link">Click Here</p>
              </a>
            </div>
          </div>
        </section>
    );
};

export default Footer;