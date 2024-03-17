import React, { useEffect, useState } from 'react'
import github from "../assets/GitHub-Logo.png"
import FooterSm from './FooterSm'
import { easeInOut, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function OtherProjects({ Projects, title }) {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        CurrentProject();
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const section = document.querySelector('.other-projects');
            if (section) {
                const { top, height } = section.getBoundingClientRect();
                const sectionBottom = top + height + 500;
                const progress = Math.min(Math.max((scrollY - top) / (sectionBottom - window.innerHeight)));
                if (progress > 1 && progress <= 30) {
                    setScrollProgress(progress);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function CurrentProject(e) {
        if (e?.id) {
            if (e?.id === title) {
                e.style.border = "5px solid #ccf381";
            } else {
                e.style.border = "none";
            }
        }
    }


    return (
        <>
            <section className='other-projects'>
                <div className='other-projects-container'>
                    <div className='other-projects-img-container'>
                        <Link to={"/work/Midjourney"}>
                            <motion.img
                                id='Midjourney'
                                style={{ x: window.innerWidth > 1024 ? `${scrollProgress * -5}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * -2}deg` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * -20}px` }), }}
                                transition={{ ease: easeInOut }}
                                onLoad={(e) => CurrentProject(e.target)}
                                src={Projects && Projects[0]?.background} alt="" /></Link>
                        <Link to={"/work/Roomsy"}>
                            <motion.img
                                id='Roomsy'
                                style={{ x: window.innerWidth > 1024 ? `${scrollProgress * -10}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * -1}deg` : '0', y: window.innerWidth > 1024 ? `${scrollProgress * -20}px` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * -10}px` }), }}
                                transition={{ ease: easeInOut }}
                                onLoad={(e) => CurrentProject(e.target)}
                                src={Projects && Projects[1]?.background} alt="" /></Link>
                        <Link to={"/work/Buletin"}>
                            <motion.img
                                id='Buletin'
                                style={{ x: window.innerWidth > 1024 ? `${scrollProgress * -10}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * -.5}deg` : '0', y: window.innerWidth > 1024 ? `${scrollProgress * -30}px` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * -5}px` }), }}
                                transition={{ ease: easeInOut }}
                                onLoad={(e) => CurrentProject(e.target)}
                                src={Projects && Projects[2]?.background} alt="" /></Link>
                    </div>

                    <div className='other-projects-img-container'>
                        <Link to={"/work/Mercedes-Benz"}>
                            <motion.img
                                id='Mercedes-Benz'
                                style={{ x: window.innerWidth > 1024 ? `${scrollProgress * 5}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * 2}deg` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * 20}px` }), }}
                                transition={{ ease: easeInOut }}
                                src={Projects && Projects[3]?.background} alt=""
                                onLoad={(e) => CurrentProject(e.target)}
                            />
                        </Link>
                        <Link to={"/work/Gucci"}>
                            <motion.img
                                id='Gucci'
                                style={{ x: window.innerWidth > 1024 ? `${scrollProgress * 10}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * 1}deg` : '0', y: window.innerWidth > 1024 ? `${scrollProgress * -20}px` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * 10}px` }), }}
                                transition={{ ease: easeInOut }}
                                onLoad={(e) => CurrentProject(e.target)}
                                src={Projects && Projects[4]?.background} alt="" /></Link>
                        <Link to={"/work/Ai Chat"}>
                            <motion.img
                                id='Ai Chat'
                                style={{ x: window.innerWidth > 1024 ? `${scrollProgress * 10}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * .5}deg` : '0', y: window.innerWidth > 1024 ? `${scrollProgress * -30}px` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * 5}px` }), }}
                                transition={{ ease: easeInOut }}
                                onLoad={(e) => CurrentProject(e.target)}
                                src={Projects && Projects[5]?.background} alt="" /></Link>
                    </div>

                    <motion.a
                        href='https://github.com/WalidAit69'
                        target='_blank'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: .2, ease: [0.8, 0, 0, 0.8] }}
                        className='other-projects-title'>
                        <motion.img src={github} alt="" />
                        <motion.span>Visit my Github for more projects !</motion.span>
                    </motion.a>
                </div>
            </section>

            <FooterSm green={true} />
        </>
    )
}

export default OtherProjects