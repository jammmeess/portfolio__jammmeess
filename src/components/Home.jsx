import React from "react";

import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
// import Contact from "./Contact";
import Footer from "./Footer";
// import Projects from "./Project";
// import "../index.css";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
