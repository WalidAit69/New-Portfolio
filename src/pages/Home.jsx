import '../index.css'
import '../App.css'
import Introduction from '../sections/Introduction'
import Skills from '../sections/Skills'
import Info from '../sections/Info'
import Shelf from '../sections/Shelf'
import Contact from '../sections/Contact'
import Footer from '../components/footer'
import React, { useEffect, useState } from 'react';
import useHeaderStore from '../store/headerStore';


function Home() {

    const sections = ['introduction', 'skills', 'info', 'shelf', 'contact', 'footer'];
    const [activeSection, setActiveSection] = useState(sections[0]);

    const { colorChange, setColorChange, setLogoChange, setisHome, setisResume } = useHeaderStore();

    const handleIntersect = (entries, observer) => {
        entries.forEach((entry) => {
            const { isIntersecting, target } = entry;
            if (isIntersecting) {
                setActiveSection(target.id);
                if (target.id === 'introduction' && window.innerWidth < 1024) {
                    setColorChange(true);
                    setLogoChange(false);
                } else if (target.id === 'info' || target.id === 'footer') {
                    setColorChange(true);
                    setLogoChange(false);
                } else if (target.id === 'skills' || target.id === 'shelf' || target.id === 'contact') {
                    setLogoChange(true);
                    setColorChange(false);
                } else {
                    setColorChange(false);
                    setLogoChange(false);
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

        if (window.innerWidth > 1200) {
            document.documentElement.style.scrollSnapType = 'y mandatory';
        }


        return () => {
            observer.disconnect();
            document.documentElement.style.scrollSnapType = '';
        };
    }, [sections]);

    const scrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setisHome(true);
        setisResume(false);
        document.title = 'Walid Ait Harma: Fullstack Developer'

    }, [])


    return (
        <main className='home' id='home'>

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
                        className={`nav-dot ${activeSection === sectionId ? 'active' : ''} ${colorChange ? 'color-green' : ''}`}
                        onClick={() => scrollToSection(sectionId)}
                    ></div>
                ))}
            </div>

        </main>
    )
}
export default Home