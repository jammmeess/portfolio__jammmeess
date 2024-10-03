import React from "react";
import Profile from "../img/about/profile__picture.jpeg";
import Arrow from "../img/common/arrow.png";

const About = () => {
    return (
        <section className="aboutSec" id="About">
            <div className="aboutSec__inner">
                <div className="aboutSec__contntWrap">
                    <h2 className="aboutSec__ttl">WEB <br/><span className="txtBlue">DEVELOPER</span>
                    </h2>
                    <figure className="aboutSec__imgWrap">
                        <img src={Profile} alt=""/>
                    </figure>
                </div>
                <div className="aboutSec__contntWrap">
                </div>
            </div>
            <div className="aboutSec__inner subCont">
                <div className="aboutSec__lowerContntWrap">
                    <div className="aboutSec__txtWrap">
                        <p className="aboutSec__txt">
                        I am a front-end web developer based on the Philippines. I really enjoy working in web development, especially when it comes to exploring different technologies. I find it easy to manage my own projects and love collaborating with others as part of a team.
                        <br/> <br/>I'm always eager to learn and stay updated with the latest industry trends. This helps me bring fresh and innovative solutions to my work, keeping things exciting and effective.
                        </p>
                    </div>
                    <div className="aboutSec__ttlWrap">
                        <h3 className="aboutSec__subTtl">_myName.<span className="txtBlue">is()</span></h3>
                        <br/>
                        <h2 className="aboutSec__ttl lowerTtl">Kristoffer <br/>Bomediano</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;