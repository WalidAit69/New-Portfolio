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

    return (
        <section className='section3'>
            <div className="info container">
                <motion.div initial={{ top: '50%' }} whileInView={{ top: '20%' }} transition={{ duration: .5, delay: 3, ease: 'easeInOut' }} className="info-title">
                    <motion.div initial={{ y: 10 }} whileInView={{ y: 0 }} transition={{ duration: 2, ease: 'easeInOut' }}>
                        <h1>
                            {words.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, fontSize: '4rem' }}
                                    whileInView={{ opacity: 1, fontSize: '2.5rem' }}
                                    transition={{ duration: 1, delay: Math.abs(index - Math.floor(words.length / 2)) * 0.1, ease: 'easeInOut', fontSize: { delay: 3 } }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.p initial={{ opacity: 0, fontSize: '3rem' }} whileInView={{ opacity: 1, fontSize: '1.5rem' }} transition={{ duration: 1, delay: 1, fontSize: { delay: 3 } }}>
                            <motion.svg initial={{ strokeDashoffset: 500 }} whileInView={{ strokeDashoffset: 0 }} transition={{ duration: 4, delay: 1, ease: 'easeInOut' }} className='line1' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.33 26.7">
                                <path className='draw2' d="M72.43,9.22c.18-.2.38-.37.61-.52s.47-.27.73-.37c.51-.2,1.08-.3,1.64-.31.57-.02,1.14.04,1.71.16s1.12.29,1.65.52c.43.18,1.08.49,1.79,1.03.71.53,1.5,1.29,2.1,2.3.61,1,1,2.25,1.05,3.57.06,1.32-.26,2.69-.92,3.82-.34.56-.74,1.08-1.22,1.51-.47.44-.99.81-1.53,1.12-1.09.61-2.23.97-3.25,1.18-2.05.42-3.59.27-3.98.28-2.02-.16-3.99-.63-5.87-1.28-1.89-.65-3.69-1.52-5.42-2.48-3.47-1.91-6.6-4.27-9.76-6.55-3.69-2.67-7.49-5.37-11.66-7.57-4.18-2.21-8.65-3.78-13.24-4.79-1.65-.37-3.46-.64-5.35-.78-.95-.05-1.91-.08-2.89-.05-.97.04-1.96.11-2.93.26-1.95.29-3.86.81-5.59,1.6-1.74.76-3.26,1.79-4.53,2.87-1.16.92-2.36,2.25-3.16,3.4-.28.37-.5.79-.75,1.19-.11.21-.22.42-.33.64-.05.11-.11.21-.16.32l-.14.34c-.09.23-.2.45-.28.68-.08.23-.16.47-.24.71-.08.24-.13.49-.19.73-.03.12-.06.25-.09.37-.02.13-.04.25-.06.38-.02.13-.04.26-.06.38-.02.13-.04.26-.05.39-.02.26-.04.52-.06.79,0,.53-.02,1.07.04,1.61.1,1.09.31,2.2.71,3.3h0c.37.99.85,1.92,1.42,2.75.6.82,1.28,1.54,2.02,2.14.19.14.38.27.57.41.1.07.19.13.28.2.1.06.2.11.3.16.2.11.39.21.59.32.2.09.4.19.6.25.8.3,1.6.46,2.33.49.74.04,1.41-.05,1.98-.2.57-.15,1.04-.4,1.38-.63.69-.48.91-.91.85-.97-.08-.08-.4.2-1.07.52-.65.32-1.7.6-3" />
                            </motion.svg>
                            Web Developer
                            <motion.svg initial={{ strokeDashoffset: 500 }} whileInView={{ strokeDashoffset: 0 }} transition={{ duration: 4, delay: 1, ease: 'easeInOut' }} className='line2' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.33 26.7">
                                <path className='draw2' d="M72.43,9.22c.18-.2.38-.37.61-.52s.47-.27.73-.37c.51-.2,1.08-.3,1.64-.31.57-.02,1.14.04,1.71.16s1.12.29,1.65.52c.43.18,1.08.49,1.79,1.03.71.53,1.5,1.29,2.1,2.3.61,1,1,2.25,1.05,3.57.06,1.32-.26,2.69-.92,3.82-.34.56-.74,1.08-1.22,1.51-.47.44-.99.81-1.53,1.12-1.09.61-2.23.97-3.25,1.18-2.05.42-3.59.27-3.98.28-2.02-.16-3.99-.63-5.87-1.28-1.89-.65-3.69-1.52-5.42-2.48-3.47-1.91-6.6-4.27-9.76-6.55-3.69-2.67-7.49-5.37-11.66-7.57-4.18-2.21-8.65-3.78-13.24-4.79-1.65-.37-3.46-.64-5.35-.78-.95-.05-1.91-.08-2.89-.05-.97.04-1.96.11-2.93.26-1.95.29-3.86.81-5.59,1.6-1.74.76-3.26,1.79-4.53,2.87-1.16.92-2.36,2.25-3.16,3.4-.28.37-.5.79-.75,1.19-.11.21-.22.42-.33.64-.05.11-.11.21-.16.32l-.14.34c-.09.23-.2.45-.28.68-.08.23-.16.47-.24.71-.08.24-.13.49-.19.73-.03.12-.06.25-.09.37-.02.13-.04.25-.06.38-.02.13-.04.26-.06.38-.02.13-.04.26-.05.39-.02.26-.04.52-.06.79,0,.53-.02,1.07.04,1.61.1,1.09.31,2.2.71,3.3h0c.37.99.85,1.92,1.42,2.75.6.82,1.28,1.54,2.02,2.14.19.14.38.27.57.41.1.07.19.13.28.2.1.06.2.11.3.16.2.11.39.21.59.32.2.09.4.19.6.25.8.3,1.6.46,2.33.49.74.04,1.41-.05,1.98-.2.57-.15,1.04-.4,1.38-.63.69-.48.91-.91.85-.97-.08-.08-.4.2-1.07.52-.65.32-1.7.6-3" />
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
                <video ref={videoRef} src={video} autoPlay loop muted></video>
            </div>
        </section >
    )
}

export default Info