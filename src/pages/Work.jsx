import React, { useEffect, useState } from 'react'
import WorkCard from '../components/WorkCard'
import axios from 'axios';
import FooterSm from "../components/FooterSm"
import useHeaderStore from '../store/headerStore'
import { motion } from "framer-motion"

function Work() {
    const { setisHome, setisResume } = useHeaderStore();

    const [workcards, setworkcards] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        setisHome(false);
        setisResume(false);

        document.title = "Walid Ait Harma: Projects"

        const fetchData = async () => {
            try {
                const response = await axios.get('/workdata.json');
                setworkcards(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [])

    return (
        <main className='work'>
            <section className='work-container'>
                <div className='work-title'>
                    <div className='work-title-div'>
                        <motion.h1 initial={{ marginTop: "3rem" }} whileInView={{ marginTop: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} >/<span>work</span>.</motion.h1>
                    </div>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, delay: .5, ease: 'easeInOut' }} >Selected work I've taken on in the past.</motion.p>
                </div>

                <div className='cards-container'>
                    {workcards.length > 0 && workcards.map((card, index) => (
                        <WorkCard key={index} image={card.image} title={card.title} link={card.link} stack={card.isfullstack}/>
                    ))}
                </div>
            </section>

            <FooterSm />
        </main>
    )
}

export default Work