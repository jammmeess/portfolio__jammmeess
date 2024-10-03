import React from "react";

const Experience = () => {
    return (
        <section className="expSec" id="Experience">
          <div className="expSec__inner">
            <div className="expSec__ttlCont">
              <h2 className="expSec__ttl">_work<span className="txtBlue">Experience.()</span></h2>
            </div>
            <div className="expSec__wrkWrapper">
              <div className="expSec__wrkCont">
                <h3 className="expSec__wrkTtl">Commude Ph</h3>
                <p className="expSec__wrkPos">Jr. Front-End <br/>Web Developer</p>
                <p className="expSec__wrkDate">May 2024 - Present</p>
              </div>
              <div className="expSec__wrkCont">
                <h3 className="expSec__wrkTtl">De Castro Consulting</h3>
                <p className="expSec__wrkPos">Web Developer<br/> Intern</p>
                <p className="expSec__wrkDate">January 2024 - Aprilt</p>
              </div>
              <div className="expSec__wrkCont">
                <h3 className="expSec__wrkTtl">Costa Cruises</h3>
                <p className="expSec__wrkPos">Demi Chef <br/>De Partie</p>
                <p className="expSec__wrkDate">March 2018 - March 2023</p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Experience;