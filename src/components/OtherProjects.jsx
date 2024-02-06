import React from 'react'
import img from "../assets/1.jpg"
import github from "../assets/GitHub-Logo.png"
import FooterSm from './FooterSm'

function OtherProjects() {
    return (
        <>
            <section className='other-projects'>
                <div className='other-projects-container'>
                    <div className='other-projects-img-container'>
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                    </div>

                    <div className='other-projects-img-container'>
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                    </div>

                    <div className='other-projects-title'>
                        <img src={github} alt="" />
                        <span>Visit my Github for more projects !</span>
                    </div>
                </div>
            </section>

            <FooterSm green={true} />
        </>
    )
}

export default OtherProjects