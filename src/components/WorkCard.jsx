import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


function WorkCard({ image, title, link }) {
    return (
        <div className='work-card flex-item'>
            <Link to={`/work/${title}`} className='work-card-img'>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .5, ease: 'easeInOut' }} src={image} alt="mercedes-logo" />
            </Link>
            <div className='work-card-info'>
                <motion.span initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: .5, ease: 'easeInOut' }}>{title}</motion.span>
                <motion.a initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: .5, ease: 'easeInOut' }} href={link} target='_blank'>{link}</motion.a>
            </div>
        </div>
    )
}

export default WorkCard