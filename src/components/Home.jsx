import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


import Navbar from "./Navbar";
import About from "./About";
import Hero from "./Hero";
import Skills from "./Skills";
import Experience from "./Experience";
// import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Project";

const Home = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

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
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
