import React from 'react'
import { motion, useAnimation, useScroll } from "framer-motion";

function WorkDetailTitle() {

    return (
        <div className='workdetail-bottom-title'>
            <motion.div
                className='blend-wrapper'>
                <span>Project</span>
                <span>Info</span>
            </motion.div>

            <div className='workdetail-bottom-descpription'>
                <p>description</p>
                <a href="" className='workdetail-btn'>Explore Work</a>
            </div>
        </div>)
}

export default WorkDetailTitle