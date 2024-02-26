import React from 'react'
import { motion } from 'framer-motion'


function InfoCard({ title1, title2, desc, icon }) {

    return (
        <div className="info-card">
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: .3, ease: 'easeInOut' }} className="info-card-top">
                {icon}
                <div>
                    <span className="info-h1">{title1}</span>
                    <span>{title2}</span>
                </div>
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: .5, ease: 'easeInOut' }} className="info-card-bottom">
                <p>{desc}</p>
            </motion.div>
        </div >
    )
}

export default InfoCard