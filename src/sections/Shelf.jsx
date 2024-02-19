import React from 'react'
import { PiArrowRightThin } from "react-icons/pi";
import { motion } from "framer-motion";

function Shelf() {
    return (
        <section className='section4'>
            <div className="shelf">
                <div className='shelf-container'>
                    <div className="left-shelf">
                        <div>
                            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }}>I build & design stuff</motion.h1>
                            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2, ease: 'easeInOut' }}>Open source projects, web apps and experimentals.</motion.p>
                            <button className='shelf-btn'>
                                see my work
                                <PiArrowRightThin size={30} />
                            </button>
                        </div>
                    </div>

                    <div className="right-shelf">
                        <div>
                            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }}>I write, sometimes</motion.h1>
                            <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2, ease: 'easeInOut' }}>About design, frontend dev, learning and life.</motion.p>
                            <button className='shelf-btn'>
                                read my articles
                                <PiArrowRightThin size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shelf