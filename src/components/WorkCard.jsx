import React from 'react'
import { Link } from 'react-router-dom'

function WorkCard({ image, title, link }) {
    return (
        <div className='work-card'>
            <Link to={`/work/${title}`}>
                <div className='work-card-img'>
                    <img src={image} alt="mercedes-logo" />
                </div>
                <div className='work-card-info'>
                    <span>{title}</span>
                    <a href="">{link}</a>
                </div>
            </Link>
        </div>
    )
}

export default WorkCard