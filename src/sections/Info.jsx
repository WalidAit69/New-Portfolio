import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
import video from "../assets/video.mp4"

const words = ['W', 'a', 'l', 'i', 'd', ' A', 'i', 't', ' H', 'a', 'r', 'm', 'a'];


function Info() {
    const [isPlayed, setisPlayed] = useState(true);
    const videoRef = useRef(null);


    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlayed) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setisPlayed(!isPlayed);
        }
    };

    const isWideViewport = window.innerWidth > 1024;

    return (
        <section className='section3'>
            <div className="info container">
                <motion.div initial={{ top: '50%' }} whileInView={{ top: '20%' }} transition={{ duration: .5, delay: 3, ease: 'easeInOut' }} className="info-title">
                    <motion.div initial={{ y: 10 }} whileInView={{ y: 0 }} transition={{ duration: 2, ease: 'easeInOut' }}>
                        <h1>
                            {words.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, fontSize: isWideViewport ? '4rem' : '2.5rem' }}
                                    whileInView={{ opacity: 1, fontSize: isWideViewport ? '2.5rem' : '1.5rem' }}
                                    transition={{ duration: 1, delay: Math.abs(index - Math.floor(words.length / 2)) * 0.1, ease: 'easeInOut', fontSize: { delay: 3 } }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.p initial={{ opacity: 0, fontSize: isWideViewport ? '3rem' : '1.5rem' }} whileInView={{ opacity: 1, fontSize: isWideViewport ? '1.5rem' : '1rem' }} transition={{ duration: 1, delay: 1, fontSize: { delay: 3 } }}>
                            <motion.svg initial={{ strokeDashoffset: 500 }} whileInView={{ strokeDashoffset: 0 }} animate={{ width: '60px' }} transition={{ duration: 4, delay: 1, ease: 'easeInOut', width: { delay: 4 } }} className='line1' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.42 30.59">
                                <path className='draw2'
                                    d="M88.09,13.57c1.48-2.76,2.27-7.54-.62-10.81C84.92-.13,81.13,0,80.84,0c-.78.04-3.21.15-5.05,2.12-1.63,1.75-1.75,3.83-1.77,4.38-.1,2.53,1.23,5.4,2.52,5.49.02,0,.5.03.69-.25.29-.44-.41-1.21-.81-2.05-.67-1.43-.65-3.43.25-4.89,1.03-1.67,2.91-2.09,3.44-2.19,1.99-.36,3.53.53,4.07.89,2.17,1.45,2.55,3.89,2.62,4.43.47,3.63-2.42,6.71-3.32,7.31-5.94,3.92-13.79,4.17-20.64,3.53-6.82-.64-13.7-2.9-20.6-1.9-6.11-10.43-23.45-11.68-33.55-7.58C4.03,11.21-1.39,15.77.32,21.46c1.5,4.97,7.45,6.51,11.77,4.4.96-.47.12-1.85-.83-1.42-3.99,1.81-9.55-.69-8.88-5.53.55-3.99,4.78-6.27,8.23-7.39,5.92-1.93,13.11-1.69,19.02.17,3.16.99,6.94,3.11,9.1,6.06-4.55,1.35-7.08,5.16-6.47,8.24.37,1.89,2.02,4.01,4.38,4.49,2.3.47,4.15-.85,4.42-1.05,2.65-1.95,3.44-6.4,1.85-11.07.73-.11,1.89-.25,3.31-.25,2.17,0,3.79.33,4.31.44,3.81.76,11.2,2.24,15.94,2.62,2.38.19,12.59.8,19.11-4.63.75-.62,1.73-1.56,2.5-3ZM37.54,28.35c-1.03.19-2.13-.34-2.75-1.1-1.51-1.86.14-4.81.31-5.12,1.28-2.29,3.62-3.01,4.25-3.19.39.64,1.02,1.84,1.12,3.44.13,2.3-.84,5.58-2.93,5.97Z" />
                            </motion.svg>
                            Web Developer
                            <motion.svg initial={{ strokeDashoffset: 500 }} whileInView={{ strokeDashoffset: 0 }} animate={{ width: '60px' }} transition={{ duration: 4, delay: 1, ease: 'easeInOut', width: { delay: 40 } }} className='line2' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.42 30.59">
                                <path className='draw2'
                                    d="M88.09,13.57c1.48-2.76,2.27-7.54-.62-10.81C84.92-.13,81.13,0,80.84,0c-.78.04-3.21.15-5.05,2.12-1.63,1.75-1.75,3.83-1.77,4.38-.1,2.53,1.23,5.4,2.52,5.49.02,0,.5.03.69-.25.29-.44-.41-1.21-.81-2.05-.67-1.43-.65-3.43.25-4.89,1.03-1.67,2.91-2.09,3.44-2.19,1.99-.36,3.53.53,4.07.89,2.17,1.45,2.55,3.89,2.62,4.43.47,3.63-2.42,6.71-3.32,7.31-5.94,3.92-13.79,4.17-20.64,3.53-6.82-.64-13.7-2.9-20.6-1.9-6.11-10.43-23.45-11.68-33.55-7.58C4.03,11.21-1.39,15.77.32,21.46c1.5,4.97,7.45,6.51,11.77,4.4.96-.47.12-1.85-.83-1.42-3.99,1.81-9.55-.69-8.88-5.53.55-3.99,4.78-6.27,8.23-7.39,5.92-1.93,13.11-1.69,19.02.17,3.16.99,6.94,3.11,9.1,6.06-4.55,1.35-7.08,5.16-6.47,8.24.37,1.89,2.02,4.01,4.38,4.49,2.3.47,4.15-.85,4.42-1.05,2.65-1.95,3.44-6.4,1.85-11.07.73-.11,1.89-.25,3.31-.25,2.17,0,3.79.33,4.31.44,3.81.76,11.2,2.24,15.94,2.62,2.38.19,12.59.8,19.11-4.63.75-.62,1.73-1.56,2.5-3ZM37.54,28.35c-1.03.19-2.13-.34-2.75-1.1-1.51-1.86.14-4.81.31-5.12,1.28-2.29,3.62-3.01,4.25-3.19.39.64,1.02,1.84,1.12,3.44.13,2.3-.84,5.58-2.93,5.97Z" />
                            </motion.svg>
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>

            <div className='info-content'>
                <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 3.8, ease: 'easeInOut' }} className="infoh1">22 years old Web developer </motion.span>
                <motion.span initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 4, ease: 'easeInOut' }} className="infoh2">quality, performance and user experience.</motion.span>
                <motion.span initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 4.2, ease: 'easeInOut' }} className="infoh3">passionate about creating websites and interactive applications.</motion.span>
                <motion.div initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 4.4, ease: 'easeInOut' }} className="videocta">
                    <div className="videoctabtn" onClick={togglePlay}>
                        {isPlayed ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 play">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                        }
                    </div>
                </motion.div>
            </div>

            <div className='info-video'>
                <motion.div initial={{ opacity: 1 }} whileInView={{ opacity: .5 }} transition={{ duration: 1, delay: 3.2, ease: 'easeInOut' }} className='info-video-layer'></motion.div>
                <video ref={videoRef} src={video} autoPlay loop muted controls={false}></video>
            </div>
        </section >
    )
}

export default Info