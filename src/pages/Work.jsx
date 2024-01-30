import React, { useEffect } from 'react'
import WorkCard from '../components/WorkCard'

function Work({ setisHome }) {

    useEffect(() => {
        setisHome(true)

    }, [])

    return (
        <main className='work'>
            <section className='work-container'>
                <div className='work-title'>
                    <h1>/<span>work</span>.</h1>
                    <p>Selected work I've taken on in the past.</p>
                </div>

                <div>
                    <WorkCard />
                </div>
            </section>
        </main>
    )
}

export default Work