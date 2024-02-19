import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

function Footer() {
    return (
        <footer>
            <section className='section6'>
                <div className='footer container'>
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }} className='footer-top'>
                        <div className='footer-top-left'>
                            <p>Say hello</p>
                            <ul>
                                <a href='mailto:aitwalid2000@gmail.com'>aitwalid2000@gmail.com</a>
                                <a href='https://www.linkedin.com/in/walidaitharma/' target='_blank'>in/walidaitharma</a>
                            </ul>
                        </div>

                        <div className='footer-top-right'>
                            <ul>
                                <Link to={'/work'}>My Work</Link>
                                <Link>My Shelf</Link>
                                <Link to={'/resume'}>My Resume</Link>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2, ease: 'easeInOut' }} className='footer-bottom'>
                        <p>© Walid Ait Harma 2024</p>
                        <div className='socials'>
                            <a>fb</a>
                            <a>in</a>
                            <a>yt</a>
                            <a>gh</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </footer>
    )
}

export default Footer