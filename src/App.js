import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Entry from './Entry';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Connect from './Connect';
import Footer from './Footer';
import Nav from './Nav';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div id="navbar">
        <Nav />
      </div>

      <section id="home">
        <Entry />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="connect">
        <Connect />
      </section>

      <Footer />
    </>
  );
}

export default App;
