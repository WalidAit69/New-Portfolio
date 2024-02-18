import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useAnimation, useScroll } from "framer-motion";
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
        setisHome(false);
        setisResume(false);
        document.title = `Walid Ait Harma: ${title}`

    }, [])

    const handleAnimationComplete = () => {
        document.getElementById('img2').style.display = 'none';
    };

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


    return (
        <main className='WorkDetail'>
            <section className='work-container'>
                <div className='work-title'>
                    <h1><span>{singleCard?.title}</span></h1>
                    <h3><span>description</span></h3>
                </div>

                <div className='workdetail-cta'>
                    <a href='' className='workdetail-btn'>Explore Work</a>
                    <a href='' className='workdetail-btn'>Github Repo</a>
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

                        <motion.img
                            initial={{ scale: 2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 15, ease: 'easeInOut' }}
                            id='img1' src={singleCard?.gallery[0]} alt="" />

                        <motion.img
                            initial={{ scale: 2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 7, ease: 'easeInOut' }}
                            onAnimationComplete={handleAnimationComplete}
                            id='img2' src={singleCard?.gallery[1]} alt="" />

                        <motion.img
                            initial={{ scale: 2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 3, ease: 'easeInOut' }}
                            onAnimationComplete={handleAnimationComplete2}
                            id='img3' src={singleCard?.gallery[2]} alt="" />

                        <div className="workdetail-img-layer"></div>
                        <div className="workdetail-img-layer2"></div>

                    </motion.div>
                </motion.div>
            </div>

            <WorkDetailTitle />

            <WorkFeature title="loftloom" desc="test" />
            <WorkFeature reverse={true} title="loftloom" desc="test" />
            <WorkFeature title="loftloom" desc="test" />

            <OtherProjects />
        </main >
    )
}

export default WorkDetail