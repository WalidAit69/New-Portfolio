import React from 'react'
import { motion } from "framer-motion";

function WorkDetailTitle() {

    return (
        <div className='workdetail-bottom-title'>
            <motion.div
                className='blend-wrapper'>

                <div id='blend-text'>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, ease: 'easeInOut' }} className="before-project">
                        Project
                    </motion.div>
                    <span>Project</span>
                </div>

                <motion.div initial={{ x: 200 }} whileInView={{ x: 0 }} transition={{ duration: 1.5, ease: 'easeInOut' }} id='blend-text'>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 2, ease: 'easeInOut' }} className="before-project">
                        Info
                    </motion.div>
                    <span>Info</span>
                </motion.div>

            </motion.div>

            <div className='workdetail-bottom-descpription'>
                <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1, ease: 'easeInOut' }} >description</motion.p>
                <motion.a initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1, ease: 'easeInOut' }} href="" className='workdetail-btn'>Explore Work</motion.a>
            </div>
        </div>)
}

export default WorkDetailTitle