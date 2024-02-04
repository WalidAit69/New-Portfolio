import React from 'react'
import { Link } from 'react-router-dom'

function WorkCard({ image, title, link }) {
    return (
        <div className='work-card'>
            <Link to={`/work/${title}`} className='work-card-img'>
                <img src={image} alt="mercedes-logo" />
            </Link>
            <div className='work-card-info'>
                <span>{title}</span>
                <a href={link} target='_blank'>{link}</a>
            </div>
        </div>
    )
}

export default WorkCard