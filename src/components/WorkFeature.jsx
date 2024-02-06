import React from 'react';
import img from "../assets/1.jpg"

function WorkFeature({ reverse , title , desc , image}) {
    return (
        <section className={`WorkFeature ${reverse && 'WorkFeaturereverse'}`}>
            <div className="left-WorkFeature">
                <span>{title}</span>
                <p>{desc}</p>
                <a href="" className='workdetail-btn'>View project</a>
            </div>

            <div className="right-WorkFeature">
                <img src={img} alt="" />
            </div>
        </section>
    )
}

export default WorkFeature