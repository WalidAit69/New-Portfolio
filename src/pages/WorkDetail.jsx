import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WorkCard from '../components/WorkCard'

function WorkDetail({ setisHome }) {

    const [singleCard, setsingleCard] = useState();
    const { title } = useParams();

    const fetchData = async (cardTitle) => {
        try {
            const response = await axios.get('../src/store/workdata.json');
            const cards = response.data;

            setsingleCard(cards.find((card) => card.title === cardTitle));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        setisHome(true);
        fetchData(title);
    }, [title]);


    return (
        <main className='WorkDetail'>
            <section className='work-container'>
                <div className='work-title'>
                    <h1><span>{singleCard?.title}</span></h1>
                </div>
            </section>

        </main>
    )
}

export default WorkDetail