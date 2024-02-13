import React from 'react'
import { Link } from 'react-router-dom'

function FooterSm({ green }) {
    return (
        <footer>
            <div className={`section6sm ${green ? 'section6green' : 'section6'}`}>
                <div className='footer container'>
                    <div className='footer-top'>
                        <div className='footer-top-left'>
                            <p>Say hello</p>
                            <ul>
                                <a href='mailto:aitwalid2000@gmail.com'>aitwalid2000@gmail.com</a>
                                <a href='https://www.linkedin.com/in/walidaitharma/' target='_blank'>in/walidaitharma</a>
                            </ul>
                        </div>

                        <div className='footer-top-right'>
                            <ul>
                                <Link to={'/work'}>My Work</Link>
                                <Link>My Shelf</Link>
                                <Link to={'/resume'}>My Resume</Link>
                            </ul>
                        </div>
                    </div>

                    <div className='footer-bottom'>
                        <p>© Walid Ait Harma 2024</p>
                        <div className='socials'>
                            <a>fb</a>
                            <a>in</a>
                            <a>yt</a>
                            <a>gh</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
}

export default FooterSm