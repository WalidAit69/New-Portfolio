import React, { useEffect } from 'react'
import useHeaderStore from '../store/headerStore';
import { MdOutlineDownloading } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";


function Resume() {

    const { setisResume } = useHeaderStore();

    useEffect(() => {
        setisResume(true)
        document.title = "Walid Ait Harma: Resume"

    }, [])


    return (
        <main className="resume-container">
            <aside className='resume-meta'>
                <a href="https://www.linkedin.com/in/walidaitharma/" target='_blank'>
                    <FaLinkedin color='#4831d4' />
                </a>
                <a className='resume-mail' href="mailto:aitwalid2000@gmail.com">
                    <CiMail size={20}/>
                </a>
                <Link to={'/resume.pdf'}>
                    <MdOutlineDownloading />
                    download
                </Link>
            </aside>

            <section className='resume'>

                <aside className='resume-skills'>
                    <div className="resume-contact">
                        <a href="https://www.walid.dev.com" target='_blank' className='resume-link'>walid.dev</a>
                        <span>Casablanca, Morocco</span>
                        <a href="mailto:aitwalid2000@gmail.com" className='resume-link'>aitwalid2000@gmail.com</a>
                    </div>

                    <div className="resume-tech">
                        <h2>Core Technologies:</h2>
                        <ul>
                            <li>html</li>
                            <li>css/tailwind css</li>
                            <li>javascript</li>
                            <li>typescript</li>
                            <li>react</li>
                            <li>next.js</li>
                            <li>php</li>
                            <li>node.js/express.js</li>
                            <li>java spring</li>
                            <li>sql / mysql</li>
                            <li>mongodb</li>
                        </ul>
                    </div>

                    <div className="resume-tech">
                        <h2>Others:</h2>
                        <ul>
                            <li>UI/UX Design</li>
                            <li>figma</li>
                            <li>photoshop</li>
                            <li>Responsive Web Design</li>
                        </ul>
                    </div>


                    <div className="resume-logo">
                        <h1 className='logo logo-purple'>
                            <svg version="1.1" className='animated-svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="100%" viewBox="0 0 544 448" enable-background="new 0 0 544 448" xml:space="preserve">
                                <path className={`draw`} opacity="1.000000" fill='none' stroke='#4831d4' stroke-width="20" stroke-miterlimit="10"
                                    d="M377.677155,278.764008 
            C361.988983,251.662964 346.296143,224.564651 330.614075,197.460068 
            C316.600525,173.239288 302.594116,149.014374 288.597565,124.783768 
            C286.641235,121.397011 284.251404,118.476982 280.594666,116.812195 
            C272.891113,113.305061 265.211060,116.393486 260.187256,125.090012 
            C240.191620,159.703873 220.210999,194.326401 200.229065,228.948166 
            C182.995041,258.808777 165.713333,288.642059 148.569809,318.554535 
            C143.660889,327.119781 145.707886,335.938538 153.189072,340.325867 
            C161.004425,344.909210 169.205780,342.543243 174.443176,333.988953 
            C176.315796,330.930359 178.666611,328.482910 181.529388,326.385101 
            C226.903580,293.135315 276.482727,285.190186 329.545898,303.418274 
            C347.857513,309.708649 366.874115,316.374207 376.205963,336.476654 
            C378.800293,342.065369 386.220795,343.695312 392.029602,341.992218 
            C402.033722,339.059082 406.248169,328.789703 400.946167,319.254639 
            C393.499695,305.863007 385.693146,292.671570 377.677155,278.764008"/>
                            </svg>
                            <span
                                className='logo-child1'>W</span>
                            <span
                                className='logo-child2'>lid</span>
                        </h1>
                    </div>

                </aside>

                <article className='resume-info'>
                    <div className='resume-info-container resume-header'>
                        <h1>Walid <br /> Ait Harma</h1>
                        <h2>Full-Stack developer.</h2>
                        <p>I'm a 22 years old Web developer passionate about creating websites and interactive applications.</p>
                    </div>

                    <div className="resume-info-container resume-education">
                        <div className='title-container'>
                            <span className='title'>Education</span>
                            <p>I’ve worked on a handful of web projects over the years, some of which were for the following organizations:</p>
                        </div>

                        <div className='edu'>
                            <div className="edu-title">
                                <div>
                                    <span className='edu-h1'>ISTA</span>
                                    <span className='edu-h2'>software developer</span>
                                </div>

                                <span>2020 - 2022</span>
                            </div>

                            <p>I studied software develepoment for 2 years and this is what i learned:</p>

                            <ul>
                                <li>html | css | javascript</li>
                                <li>C# | Dotnet</li>
                                <li>python</li>
                                <li>java</li>
                                <li>sql</li>
                            </ul>
                        </div>

                        <div className='edu'>
                            <div className="edu-title">
                                <div>
                                    <span className='edu-h1'>FST</span>
                                    <span className='edu-h2'>Web Developer</span>
                                </div>

                                <span>2022 - 2023</span>
                            </div>

                            <p>I studied web develepoment for 1 year and this is what i learned:</p>

                            <ul>
                                <li>UI/UX design</li>
                                <li>Html | Css | Javascript</li>
                                <li>ReactJS | Angular</li>
                                <li>php | laravel</li>
                                <li>java | jee</li>
                                <li>mysql | mongodb</li>
                                <li>git | cloud</li>
                            </ul>
                        </div>

                    </div>

                    <div className="resume-info-container resume-experience">
                        <div className='title-container'>
                            <span className='title'>Experience</span>
                            <p>I’ve worked on a handful of web projects over the years, some of which were for the following organizations:</p>
                        </div>

                        <div className='edu'>
                            <div className="edu-title">
                                <div>
                                    <span className='edu-h1'>VPS-SOLUTION</span>
                                    <span className='edu-h2'>web developer internship</span>
                                </div>

                                <span>May 2022 - June 2022</span>
                            </div>

                            <p>I worked on a frontend project for the company.</p>

                            <ul>
                                <li>Built a frontend application.</li>
                                <li>Crafted and improved design, accessibility and overall experience of products.</li>
                                <li>Communicated effectively with project managers and the team.</li>
                            </ul>
                        </div>

                        <div className='edu'>
                            <div className="edu-title">
                                <div>
                                    <span className='edu-h1'>ENERGIEDIN</span>
                                    <span className='edu-h2'>web developer internship</span>
                                </div>

                                <span>January 2023 - March - 2023</span>
                            </div>

                            <p>I worked on a couple of projects for organizations and individuals as a fullstack developer.</p>

                            <ul>
                                <li>Built fullstack applications for multiple clients. Most especially JavaScript and React applications.</li>
                                <li>Enforced healthy codebases, coding style and standards.</li>
                                <li>Completed projects on time and delivered to clients accordingly.</li>
                                <li>Communicated effectively with project manager and the team.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='resume-info-container resume-projects'>
                        <div className='title-container'>
                            <span className='title'>Projects</span>
                            <p className='resume-contact'>Links to some of my work can be found on <a href="https://www.walid.dev.com/work">walid.dev/work</a> and details can be provided upon request via a scheduled demo call.</p>
                        </div>
                    </div>

                </article>

            </section>

        </main>
    )
}

export default Resume