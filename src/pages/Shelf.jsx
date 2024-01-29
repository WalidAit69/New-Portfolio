import React from 'react'
import { PiArrowRightThin } from "react-icons/pi";

function Shelf() {
    return (
        <section className='section4'>
            <div className="shelf">
                <div className='shelf-container'>
                    <div className="left-shelf">
                        <div>
                            <h1>I build & design stuff</h1>
                            <p>Open source projects, web apps and experimentals.</p>
                            <button className='shelf-btn'>
                                see my work
                                <PiArrowRightThin size={30}/>
                            </button>
                        </div>
                    </div>

                    <div className="right-shelf">
                        <div>
                            <h1>I write, sometimes</h1>
                            <p>About design, frontend dev, learning and life.</p>
                            <button className='shelf-btn'>
                                read my articles
                                <PiArrowRightThin size={30}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shelf