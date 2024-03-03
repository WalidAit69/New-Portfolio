import React, { useEffect, useState } from 'react'
import img from "../assets/1.jpg"
import github from "../assets/GitHub-Logo.png"
import FooterSm from './FooterSm'
import { easeInOut, motion } from 'framer-motion'

function OtherProjects() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
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
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <section className='other-projects'>
                <div className='other-projects-container'>
                    <div className='other-projects-img-container'>
                        <motion.img
                            style={{ x: window.innerWidth > 1024 ? `${scrollProgress * -5}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * -2}deg` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * -20}px` }), }}
                            transition={{ ease: easeInOut }}
                            src={img} alt="" />
                        <motion.img
                            style={{ x: window.innerWidth > 1024 ? `${scrollProgress * -10}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * -1}deg` : '0', y: window.innerWidth > 1024 ? `${scrollProgress * -20}px` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * -10}px` }), }}
                            transition={{ ease: easeInOut }}
                            src={img} alt="" />
                        <motion.img
                            style={{ x: window.innerWidth > 1024 ? `${scrollProgress * -10}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * -.5}deg` : '0', y: window.innerWidth > 1024 ? `${scrollProgress * -30}px` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * -5}px` }), }}
                            transition={{ ease: easeInOut }}
                            src={img} alt="" />
                    </div>

                    <div className='other-projects-img-container'>
                        <motion.img
                            style={{ x: window.innerWidth > 1024 ? `${scrollProgress * 5}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * 2}deg` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * 20}px` }), }}
                            transition={{ ease: easeInOut }}
                            src={img} alt="" />
                        <motion.img
                            style={{ x: window.innerWidth > 1024 ? `${scrollProgress * 10}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * 1}deg` : '0', y: window.innerWidth > 1024 ? `${scrollProgress * -20}px` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * 10}px` }), }}
                            transition={{ ease: easeInOut }}
                            src={img} alt="" />
                        <motion.img
                            style={{ x: window.innerWidth > 1024 ? `${scrollProgress * 10}px` : '0', rotate: window.innerWidth > 1024 ? `${scrollProgress * .5}deg` : '0', y: window.innerWidth > 1024 ? `${scrollProgress * -30}px` : '0', ...(window.innerWidth <= 1024 && { x: `${scrollProgress * 5}px` }), }}
                            transition={{ ease: easeInOut }}
                            src={img} alt="" />
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