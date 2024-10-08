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
    <section className="projSec" id="Projects">
      <h2 className="projSec__ttl">MY <br/><span className="txtBlue">PROJECTS.()</span>
        <div className="projSec__projDiv left"></div>
      </h2>
        <div className="projSec__inner">
          {projectsData.map((project, index) => (
            <div className="projSec__cardCont" key={index}>
              <article
                className={`postcard dark ${index % 2 === 0 ? "red" : "blue"}`}
              >
                <a
                  className="postcard__img_link"
                  href={project.liveLink}
                  target="_blank"
                >
                  <img
                    className="postcard__img"
                    src={project.imgSrc}
                    alt={project.title}
                  />
                </a>
                <div className="postcard__text">
                  <h1
                    className={`postcard__title ${
                      index % 2 === 0 ? "red" : "green"
                    }`}
                  >
                    <a href={project.liveLink} target="_blank">
                      {project.title}
                    </a>
                  </h1>
                  <div className="postcard__subtitle small">
                    <i className="fas fa-calendar-alt"></i>
                    {project.techStack}
                  </div>
                  <div className="postcard__bar"></div>
                  <div className="postcard__preview-txt">
                    {project.githubLink && (
                      <p>
                        Git Repository:{" "}
                        <a href={project.githubLink} target="_blank">
                          <i>{project.title}</i>
                        </a>
                      </p>
                    )}
                    {project.extraInfo && (
                      <ul className="postcard__tagbox">
                        <li className="tag__item">
                          <i className="fas fa-tag"></i>
                          {project.extraInfo}
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      <div className="projSec__projDiv"></div>
    </section>
  )
}

export default Project;
