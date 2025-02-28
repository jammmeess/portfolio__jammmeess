import React from "react";

const Experience = () => {
  return (
    <section className="expSec" id="Experience">
      <div className="expSec__inner">
        <div
          className="expSec__ttlCont"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          <h2 className="expSec__ttl">
            <span class="blink">_</span>work
            <span className="txtBlue">Experience.()</span>
          </h2>
        </div>
        <div className="expSec__wrkWrapper">
          <div
            className="expSec__wrkCont"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h3 className="expSec__wrkTtl">Commude Ph</h3>
            <p className="expSec__wrkPos">
              Jr. Front-End <br />
              Web Developer
            </p>
            <p className="expSec__wrkDate">May 2024 - Present</p>
          </div>
          <div
            className="expSec__wrkCont"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h3 className="expSec__wrkTtl">De Castro Consulting</h3>
            <p className="expSec__wrkPos">
              Web Developer
              <br /> Intern
            </p>
            <p className="expSec__wrkDate">January 2024 - April 2024</p>
          </div>
          <div
            className="expSec__wrkCont"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3 className="expSec__wrkTtl">Costa Cruises</h3>
            <p className="expSec__wrkPos">
              Demi Chef <br />
              De Partie
            </p>
            <p className="expSec__wrkDate">March 2018 - March 2023</p>
          </div>
          <div
            className="expSec__wrkCont"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <h3 className="expSec__wrkTtl">Ibiza Beach Club BGC</h3>
            <p className="expSec__wrkPos">
              Commis <br />
              De Cusine
            </p>
            <p className="expSec__wrkDate">Febuary 2017 - October 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
