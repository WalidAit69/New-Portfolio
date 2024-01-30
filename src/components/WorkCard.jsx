import React from 'react'
import { Link } from 'react-router-dom'

function WorkCard() {
    return (
        <div className='work-card'>
            <Link>
                <figure>
                    <img src="" alt="" />
                </figure>
                <div className='work-card-info'>
                    <span>title</span>
                    <a href="">link</a>
                </div>
            </Link>
        </div>
    )
}

export default WorkCard