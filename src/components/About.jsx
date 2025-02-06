import React from "react";
import Profile from "../img/about/profile__picture.jpeg";

const About = () => {

    return (
        <section className="aboutSec" id="About">
            <div className="aboutSec__inner">
                <div className="aboutSec__contntWrap">
                    <h2 className="aboutSec__ttl" data-aos="fade-up" data-aos-duration="1000">
                        FRONT-END <br/>
                        <span className="txtBlue">WEB DEVELOPER</span>
                    </h2>
                    <figure className="aboutSec__imgWrap" data-aos="fade-zoom-in" data-aos-duration="1000" data-aos-delay="400">
                        <img src={Profile} alt=""/>
                    </figure>
                </div>
                <div className="aboutSec__contntWrap">
                </div>
            </div>
            <div className="aboutSec__inner subCont">
                <div className="aboutSec__lowerContntWrap">
                    <div className="aboutSec__txtWrap" data-aos="fade-up" data-aos-duration="1000">
                        <p className="aboutSec__txt">
                            I am a front-end web developer based on the Philippines. I really enjoy working in web development, especially when it comes to exploring different technologies. I find it easy to manage my own projects and love collaborating with others as part of a team.
                            <br/><br/>
                            I'm always eager to learn and stay updated with the latest industry trends. This helps me bring fresh and innovative solutions to my work, keeping things exciting and effective.
                        </p>
                    </div>
                    <div className="aboutSec__ttlWrap" data-aos="fade-up" data-aos-duration="1000">
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
