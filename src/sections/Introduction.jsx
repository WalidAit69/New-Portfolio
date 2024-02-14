import React from 'react';
import handsome from "../assets/profile.jpg";
import particles from "../assets/particles.svg";
import longparticle from "../assets/longparticle.svg";
import "../App.css";

function Introduction() {
  return (
    <div className='section1'>
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
              <img src={handsome} className='handsome-img' alt="a very handsome man" />
              <img className='particles' src={particles} />
            </figure>
          </div>
        </div>
      </div>

      <img src={longparticle} className='longparticle' alt="" />
    </div>
  )
}

export default Introduction