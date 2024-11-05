import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "../img/hero/hero__vidBanner.mp4";
import Resume from "../files/Bomediano_Resume.pdf";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroTitleRef = useRef(null);
    const heroBtnRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heroTitleRef.current,
            {   y: 200,
                opacity: 0,
            },
            {
                y: -20,
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: heroTitleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            heroBtnRef.current,
            {
                y: 200,
                opacity:0,
            },
            {
                y: -20,
                opacity: 1,
                duration: 2,
                delay: 1,
            }
        )
    }, []);

    return (
        <section className="heroSec">
            <div className="hero">
                <div className="hero__banner">
                    <video className="hero__vid" src={Banner} autoPlay loop muted />
                </div>
                <div className="hero__container">
                    <div className="hero__inner">
                        <div className="hero__titleCont">
                            <h1 className="hero__title" ref={heroTitleRef}>
                                Hello World, I am a <br />
                                <span className="hero__lowerTitle">Web Developer</span>
                            </h1>
                            <div className="commonBtn" ref={heroBtnRef}>
                                <a href={Resume} download>
                                    <button className="commonBtn__primaryBtn">
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
