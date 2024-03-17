import React, { useEffect, useRef } from 'react';
import handsome from "../assets/handsome2.jpeg";
import particles from "../assets/particles.svg";
import longparticle from "../assets/longparticle.svg";
import "../App.css";
import { motion, useAnimation, useInView } from "framer-motion"

function Introduction() {

  const divRef = useRef(null);

  const h1controls = useAnimation();
  const spancontrols = useAnimation();

  const isinview = useInView(divRef);

  useEffect(() => {
    if (isinview) {
      h1controls.start({
        top: "0px",
      });

      spancontrols.start({
        bottom: "0px",
      });

    } else {
      h1controls.start({
        top: "170px",
      });

      spancontrols.start({
        bottom: "-80px",
      });
    }

  }, [h1controls, spancontrols, isinview]);

  return (
    <div className='section1'>
      <div className="presentation-section container">
        <div className="left-presentation">
          <div>
            <div className='h1title' ref={divRef}>
              <motion.h1 initial={{ top: "170px" }} animate={h1controls} transition={{ duration: .3, ease: 'easeInOut' }}>Fullstack</motion.h1>
              <motion.span initial={{ bottom: "-80px" }} animate={spancontrols} transition={{ duration: .3, delay: .3, ease: 'easeInOut' }} className='h1span'>Developer</motion.span>
            </div>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .3, delay: .6, ease: 'easeInOut' }}>I like to craft solid and scalable fullstack products with great user experiences.</motion.h2>
          </div>

          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .3, delay: .7, ease: 'easeInOut' }}>Highly skilled at progressive enhancement, design systems & UI Engineering.</motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: .3, delay: .8, ease: 'easeInOut' }}>Proven experience building successful products for clients across several countries.</motion.p>
          </div>
        </div>

        <div className="right-presentation">
          <div className="handsome">
            <figure>
              <motion.img initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 1, ease: 'easeInOut' }} src={handsome} className='handsome-img' alt="a handsome man" />
              <img className='particles' src={particles} />
            </figure>
          </div>
        </div>
      </div>

      <img src={longparticle} className='longparticle' alt="" />
    </div >
  )
}

export default Introduction