import React from "react";
import DeCastroConsulting from "../img/project/DCC.png";
import DeCastroLawFirm from "../img/project/DCLF.png";
import Engine from "../img/project/engine.png";
import OrderXpress from "../img/project/orderxpress.png";
import Library from "../img/project/library.png";

const projectsData = [
  {
    title: "De Castro Law Firm",
    imgSrc: DeCastroLawFirm,
    liveLink: "https://decastroconsulting.ph/law-firm/",
    techStack: "WordPress, Css, Elementor",
    githubLink: null,
    extraInfo: "Internship | De Castro Consulting",
  },
  {
    title: "De Castro Consulting",
    imgSrc: DeCastroConsulting,
    liveLink: "https://decastroconsulting.ph/",
    techStack: "WordPress, Css, Elementor",
    githubLink: null,
    extraInfo: "Internship | De Castro Consulting",
  },
  {
    title: "Engine_ Games",
    imgSrc: Engine,
    liveLink: "/",
    techStack: "Laravel, Html, Css, Javascript, PHP, Bootstrap, mySQL",
    githubLink: "https://github.com/jammmeess/Engine",
    extraInfo: "Best Capstone Award | KodeGo Ph",
  },
  {
    title: "OrderXpress",
    imgSrc: OrderXpress,
    liveLink: "https://orderxpress.vercel.app",
    techStack: "ReactJs, Html, Css, Sass, Javascript, Bootstrap, Vercel, Git",
    githubLink: "https://github.com/caranayjamesmichael/orderxpress",
    extraInfo: "Group Project | KodeGo Ph",
  },
  {
    title: "Library",
    imgSrc: Library,
    liveLink: "https://jammmeess.github.io/library/",
    techStack: "Html, Css, Bootstrap, Git Pages, Git",
    githubLink: "https://github.com/jammmeess/library",
    extraInfo: "First Project | KodeGo Ph",
  },
];

const Project = () => {
  return (
    <section className="projSec">
      <div className="projSec__inner">
        <h2 className="projSec__ttl">_my<span className="txtBlue">.Projects()</span></h2>
        <div className="projSec__cardContainer">
          <div className="projSec__cardWrapper">
            <div className="projSec__cardFig">
              <img src={Library} alt="" />
            </div>
            <div className="projSec__cardContent">
              <h3 className="projSec__cardTtl">Library</h3>
              <h4 className="projSec__cardTech">HTML, CSS, Git, GitHub, GitHub Pages</h4>
              <div className="divider"></div>
              <h4 className="projSec__cardRepo" >Repository:</h4>
              <h4 className="projSec__cardInfo">First Project | KodeGo</h4>
            </div>
          </div>

          <div className="projSec__cardWrapper">
            <div className="projSec__cardFig">
              <img src={Library} alt="" />
            </div>
            <div className="projSec__cardContent">
              <h3 className="projSec__cardTtl">Library</h3>
              <h4 className="projSec__cardTech">HTML, CSS, Git, GitHub, GitHub Pages</h4>
              <div className="divider"></div>
              <h4 className="projSec__cardRepo" >Repository:</h4>
              <h4 className="projSec__cardInfo">First Project | KodeGo</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
