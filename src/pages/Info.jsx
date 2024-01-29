import React from 'react';
import Illustration from '../assets/illusrtation.svg';

function Info() {
    return (
        <section className='section3'>
            <div className="info container">
                <div className="left-info">
                    <h1>Over the years,</h1>
                    <p>
                        <span>
                            I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.
                        </span>
                        <span>
                            Currently, I work at Shopify as a Senior Frontend Engineer crafting thoughtful and inclusive experiences that adhere to web standards for over 3 million merchants across the world.
                        </span>
                        <span>
                            Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored towards automated VAT compliance for multi-channel sellers in Europe.
                        </span>
                        <span>
                            Prior to hellotax, I was Senior frontend engineering consultant with Pixel2HTML, building JavaScript applications and interfaces for orgs and individuals.
                        </span>
                    </p>
                </div>

                <div className="right-info">
                    <figure>
                        <img src={Illustration} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Info