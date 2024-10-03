import React from "react";
import Banner from "../img/hero/hero__vidBanner.mp4";
import Resume from "../files/Bomediano_Resume.pdf"

const Hero = () => {
    return (
        <section className="heroSec">
            <div className="hero">
                <div className="hero__banner">
                    <video className="hero__vid" src={Banner} autoPlay loop muted/>
                </div>
                <div className="hero__container">
                    <div className="hero__inner">
                        <div className="hero__titleCont">
                            <h1 className="hero__title">
                                Hello World, I am a <br/>
                                <span className="hero__lowerTitle">Web Developer</span>
                            </h1>
                            <div className="commonBtn">
                                <a href={Resume} download >
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