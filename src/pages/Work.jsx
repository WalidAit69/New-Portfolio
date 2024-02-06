import React, { useEffect, useState } from 'react'
import WorkCard from '../components/WorkCard'
import axios from 'axios';
import FooterSm from "../components/FooterSm"
import useHeaderStore from '../store/headerStore';

function Work() {
    const { setisHome } = useHeaderStore();

    const [workcards, setworkcards] = useState([]);

    useEffect(() => {
        setisHome(false);

        const fetchData = async () => {
            try {
                const response = await axios.get('../src/store/workdata.json');
                setworkcards(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [])

    return (
        <main className='work'>
            <section className='work-container'>
                <div className='work-title'>
                    <h1>/<span>work</span>.</h1>
                    <p>Selected work I've taken on in the past.</p>
                </div>

                <div className='cards-container'>
                    {workcards.length > 0 && workcards.map((card, index) => (
                        <WorkCard key={index} image={card.image} title={card.title} link={card.link} />
                    ))}
                </div>
            </section>

            <FooterSm />
        </main>
    )
}

export default Work