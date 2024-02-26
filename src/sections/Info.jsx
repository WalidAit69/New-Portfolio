import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
import InfoCard from '../widgets/InfoCard';
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { CiDatabase } from "react-icons/ci";


function Info() {
    const isWideViewport = window.innerWidth > 1024;

    return (
        <section className='section3'>
            <div className="info">
                <div className='info-title'>
                    <motion.h1 initial={{ marginTop: '5rem' }} whileInView={{ marginTop: 0 }} transition={{ duration: .5, ease: 'easeInOut' }}>My Expertise</motion.h1>
                </div>

                <div className="info-container">
                    <InfoCard title1={'Software'} title2={'Development'} desc={'Experienced in both functional and OOP: C#, Java, JavaScript, TypeScript.'} icon={<HiOutlineComputerDesktop size={50} />} />
                    <InfoCard title1={'Frontend Dev'} title2={'React, NextJS'} desc={'Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS, React and NextJS frameworks.'} icon={<FaReact size={50} />} />
                    <InfoCard title1={'Backend Dev'} title2={'Spring, NodeJS'} desc={'Over 1 year of experience in building robust server-side applications using Spring and Node.js frameworks.'} icon={<CiDatabase size={50} />} />
                    <InfoCard title1={'Mobile Dev'} title2={'Android, iOS'} desc={'Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.'} icon={<IoLogoGooglePlaystore size={50} />} />

                    <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: .6, ease: 'easeInOut' }} className='info-quote'>
                        <h3>
                            Sometimes the best way to solve a problem is to help others.
                        </h3>

                        <span>- Uncle Iroh, 'Avatar: The Last Airbender'</span>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

export default Info