import React from 'react';
import img from "../assets/1.jpg"
import { motion } from "framer-motion"

function WorkFeature({ reverse, title, desc, image, video, link }) {
    return (
        <section className={`WorkFeature ${reverse && 'WorkFeaturereverse'}`}>
            <motion.div
                initial={{ y: 300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: .2, ease: [0.8, 0, 0, 0.8] }}
                className="left-WorkFeature">
                <span>{title}</span>
                <p>{desc}</p>
                <a href={link} target='_blank' className='workdetail-btn'>View project</a>
            </motion.div>

            {!reverse ? <motion.div
                initial={{ x: 300, rotate: 10 }}
                whileInView={{ x: 0, rotate: 0 }}
                transition={{ duration: 1, ease: [0.8, 0, 0, 0.8] }}
                className="right-WorkFeature">
                {image && <img src={image} alt="" />}
                {video && <video src={video} autoPlay muted loop></video>}
            </motion.div> : <motion.div
                initial={{ x: -300, rotate: -10 }}
                whileInView={{ x: 0, rotate: 0 }}
                transition={{ duration: 1, ease: [0.8, 0, 0, 0.8] }}
                className="right-WorkFeature">
                {image && <img src={image} alt="" />}
                {video && <video src={video} autoPlay muted loop></video>}
            </motion.div>}
        </section>
    )
}

export default WorkFeature