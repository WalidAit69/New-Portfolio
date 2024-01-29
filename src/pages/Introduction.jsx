import React from 'react';
import profile from "../assets/profile.jpg";
import particles from "../assets/particles.svg";
import "../App.css";

function Introduction() {
  return (
    <section className='section1'>
      <div className="presentation-section container">
        <div className="left-presentation">
          <div>
            <h1>Fullstack <span>Developer</span></h1>
            <h2>I like to craft solid and scalable fullstack products with great user experiences.</h2>
          </div>

          <div>
            <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            <p>Proven experience building successful products for clients across several countries.</p>
          </div>
        </div>

        <div className="right-presentation">
          <div className="handsome">
            <figure>
              <img src={profile} alt="a very handsome man" />
              <img className='particles' src={particles} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction