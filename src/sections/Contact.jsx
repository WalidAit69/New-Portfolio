import React, { useState } from 'react'
import { PiArrowRightThin } from 'react-icons/pi'
import { motion } from 'framer-motion'

function Contact() {

    const [focusedInput, setFocusedInput] = useState(null);

    const handleFocus = (inputId) => {
        setFocusedInput(inputId);
    };

    const handleBlur = () => {
        setFocusedInput(null);
    };

    return (
        <section className='section5'>
            <div className="contact container">
                <div className="title">
                    <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeInOut' }}>Send me a message!</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2, ease: 'easeInOut' }}>Got a question or proposal, or just want to say hello? Go ahead.</motion.p>
                </div>

                <form action="">
                    <div className='inputs'>
                        <div className={`input ${focusedInput === 'name' ? 'focused' : ''}`}>
                            <label htmlFor="name">Your Name</label>
                            <input required type="text" id='name' placeholder='Enter your name'
                                onFocus={() => handleFocus('name')}
                                onBlur={handleBlur} />
                        </div>
                        <div className={`input ${focusedInput === 'email' ? 'focused' : ''}`}>
                            <label htmlFor="email">Email Address</label>
                            <input required type="email" id='email' placeholder='Enter your email address'
                                onFocus={() => handleFocus('email')}
                                onBlur={handleBlur} />
                        </div>
                    </div>

                    <div className={`input ${focusedInput === 'message' ? 'focused' : ''}`}>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            onFocus={() => handleFocus('message')}
                            onBlur={handleBlur}
                            required
                            placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?' name="message" id="message" rows="7" minLength={30}></textarea>
                    </div>

                    <div className='contact-btn'>
                        <button className='shelf-btn'>
                            shoot
                            <PiArrowRightThin size={30} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact