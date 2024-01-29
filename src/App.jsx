import './index.css'
import './App.css'
import Introduction from './pages/Introduction'
import Header from './components/header'
import Skills from './pages/Skills'
import Info from './pages/Info'
import Shelf from './pages/Shelf'
import Contact from './pages/Contact'
import Footer from './components/footer'
import React, { useEffect, useState } from 'react';


function App() {

  const sections = ['introduction', 'skills', 'info', 'shelf', 'contact', 'footer'];
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [Colorchange, setColorchange] = useState(false);

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
        if (entry.target.id === 'info' || entry.target.id === 'footer') {
          setColorchange(true);
        } else {
          setColorchange(false);
        }
      }
    });
  };


  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.5,
    });

    sections.forEach((sectionId) => {
      const target = document.getElementById(sectionId);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header Colorchange={Colorchange}/>

      <section id='introduction'>
        <Introduction />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='info'>
        <Info />
      </section>

      <section id='shelf'>
        <Shelf />
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <section id='footer'>
        <Footer />
      </section>


      <div className='nav-dots'>
        {sections.map((sectionId, index) => (
          <div
            key={sectionId}
            className={`nav-dot ${activeSection === sectionId ? 'active' : ''} ${Colorchange ? 'color-green' : ''}`}
            onClick={() => scrollToSection(sectionId)}
          ></div>
        ))}
      </div>

    </>
  )
}

export default App
