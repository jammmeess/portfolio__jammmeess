import React, { useEffect, useRef } from "react";
import Profile from "../img/about/profile__picture.jpeg";
import Arrow from "../img/common/arrow.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutTitleRef = useRef(null);
    const aboutLwrTitleRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            aboutTitleRef.current, 
            {
                y: 200,
                opacity: 0,
            },
            {
                y: -20,
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: aboutTitleRef.current,
                    start: "top 100%",
                    toggleActions: "play none none none",
                }
            }
        );

        gsap.fromTo(
            aboutLwrTitleRef.current, 
            {
                y: 200,
                opacity: 0,
                color: "#E7ECEF",
            },
            {
                y: -20,
                opacity: 1,
                delay: 1,
                duration: 2,
                color: "#0047AB",
                scrollTrigger: {
                    trigger: aboutLwrTitleRef.current,
                    start: "top 100%",
                    toggleActions: "play none none none",
                }
            }
        );
    }, []);

    return (
        <section className="aboutSec" id="About">
            <div className="aboutSec__inner">
                <div className="aboutSec__contntWrap">
                    <h2 className="aboutSec__ttl" ref={aboutTitleRef}>
                        FRONT-END <br/>
                        <span className="txtBlue" ref={aboutLwrTitleRef}>WEB DEVELOPER</span>
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
                            <br/><br/>
                            I'm always eager to learn and stay updated with the latest industry trends. This helps me bring fresh and innovative solutions to my work, keeping things exciting and effective.
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
