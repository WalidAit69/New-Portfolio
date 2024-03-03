import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import WorkDetailTitle from '../components/WorkDetailTitle';
import WorkFeature from '../components/WorkFeature';
import OtherProjects from '../components/OtherProjects';
import useHeaderStore from '../store/headerStore';
import particles1 from "../assets/workparticle1.svg";
import particles2 from "../assets/workparticle2.svg";


function WorkDetail() {
    const { setisHome, setisResume } = useHeaderStore();
    const [singleCard, setsingleCard] = useState();
    const { title } = useParams();

    const fetchData = async (cardTitle) => {
        try {
            const response = await axios.get('/workdata.json');
            const cards = response.data;

            setsingleCard(cards.find((card) => card.title === cardTitle));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(title);
    }, [title]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setisHome(false);
        setisResume(false);
        document.title = `Walid Ait Harma: ${title}`

    }, [])

    const handleAnimationComplete2 = () => {
        document.getElementById('img3').style.display = 'none';
    };

    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const { scrollYProgress } = useScroll();


    useEffect(() => {
        const handleScroll = async () => {
            const trigger = scrollYProgress.get();

            if (trigger > 0.1 && window.innerWidth > 800) {
                controls.start({ width: '85%', height: '80vh', borderRadius: '0', position: "static" });
                controls2.start({ borderRadius: '0' });
            } else if (trigger > 0.1 && window.innerWidth < 800) {
                controls.start({ width: '90%', height: '50vh', borderRadius: '0', position: "static" });
                controls2.start({ borderRadius: '0' });
            } else if (trigger < 0.1 && window.innerWidth > 1200) {
                controls.start({ width: '350px', height: '150px', borderRadius: '100px' });
                controls2.start({ borderRadius: '100px' });
                controls.start({
                    position: "absolute", transition: { delay: 0.5 }
                });
            } else {
                controls.start({ width: '250px', height: '120px', borderRadius: '100px' });
                controls2.start({ borderRadius: '100px' });
                controls.start({
                    position: "absolute", transition: { delay: 0.5 }
                });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls, scrollYProgress]);

    useEffect(() => {
        const updateTrigger = () => {
            const trigger = scrollYProgress.get();
            if (window.innerWidth > 800 || (window.innerWidth < 800 && trigger > 0)) {
                controls3.start({ scale: 1 });
            }
        };

        window.addEventListener('scroll', updateTrigger);

        updateTrigger();

        return () => {
            window.removeEventListener('scroll', updateTrigger);
        };
    }, []);

    const divRef = useRef(null);
    const h1controls = useAnimation();
    const isinview = useInView(divRef);

    useEffect(() => {
        if (isinview) {
            h1controls.start({
                marginTop: 0,
            });

        } else {
            h1controls.start({
                marginTop: "10rem",
            });
        }

    }, [isinview, h1controls]);

    return (
        <main className='WorkDetail'>
            <section className='work-container'>
                <div className='work-title'>
                    <div ref={divRef}>
                        <motion.h1 initial={{ marginTop: '10rem' }} animate={h1controls} transition={{ duration: 1, ease: 'easeInOut' }}><span>{singleCard?.title}</span></motion.h1>
                    </div>
                    <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}><span>{singleCard?.description}</span></motion.h3>
                </div>

                <div className='workdetail-cta'>
                    <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1, ease: 'easeInOut' }} href={singleCard?.link} target='_blank' className='workdetail-btn'>Explore Work</motion.a>
                    <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 1, ease: 'easeInOut' }} href={singleCard?.github} target='_blank' className='workdetail-btn'>Github Repo</motion.a>
                </div>

                <div className="workdetail-particle1">
                    <img src={particles2} />
                </div>

                <div className="workdetail-particle2">
                    <img src={particles1} />
                </div>

            </section>

            <div className='workdetail-slider'>
                <motion.div
                    animate={controls}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='workdetail-img'>
                    <motion.div
                        animate={controls2}
                        transition={{ duration: 0.1, ease: 'easeInOut' }}
                        className="workdetail-img-container">

                        <motion.video
                            muted autoPlay loop
                            initial={{ scale: 2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 5, ease: 'easeInOut' }}
                            id='img1' src={singleCard?.gallery[0]} alt="" />


                        <motion.video
                            muted autoPlay loop
                            initial={{ scale: 2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 6, ease: 'easeInOut' }}
                            onAnimationComplete={handleAnimationComplete2}
                            id='img3' src={singleCard?.gallery[1]} alt="" />

                        <div className="workdetail-img-layer"></div>

                    </motion.div>
                </motion.div>
            </div>

            <WorkDetailTitle link={singleCard?.link} description={singleCard?.shortdesc} />

            <WorkFeature title={singleCard?.gallerytitles[0]?.title} desc={singleCard?.gallerytitles[0]?.description} video={singleCard?.gallery[2]} link={singleCard?.link} />
            <WorkFeature reverse={true} title={singleCard?.gallerytitles[1]?.title} desc={singleCard?.gallerytitles[1]?.description} video={singleCard?.gallery[1]} link={singleCard?.link} />
            <WorkFeature title={singleCard?.gallerytitles[2]?.title} desc={singleCard?.gallerytitles[2]?.description} video={singleCard?.gallery[3]} link={singleCard?.link} />

            <OtherProjects />
        </main >
    )
}

export default WorkDetail