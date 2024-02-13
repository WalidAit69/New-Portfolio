import React, { useEffect, useState } from 'react';
import "./header.css";
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import useHeaderStore from '../store/headerStore';


function Header() {
  const { colorChange, logoChange, isHome, isResume } = useHeaderStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controls = useAnimation();
  const controls2 = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-icon') && !event.target.closest('.menu')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  function isScrolledDown() {
    const scrollTop = window.scrollY;
    return scrollTop > 0;
  }

  function handleScrollAnimation() {
    if (isScrolledDown()) {
      controls.start({ x: 50 })
      controls2.start({ x: -50 })

      controls.start({ display: "none", transition: { delay: .3 } })
      controls2.start({ display: "none", transition: { delay: .3 } })
    } else {
      controls.start({ x: 0 })
      controls2.start({ x: 0 })

      controls.start({ display: "block" })
      controls2.start({ display: "block" })
    }
  };

  window.addEventListener('load', function () {
    handleScrollAnimation();
  });

  window.addEventListener('scroll', handleScrollAnimation);


  return (
    <>
      {!isResume && <header className={`${!isHome && 'header-blur'}`}>
        <div className="header">
          <Link to={'/'}>
            <h1 className={`logo ${logoChange && 'logo-purple'} ${!isHome && 'logo-green'}`}>
              <svg version="1.1" className='animated-svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="100%" viewBox="0 0 544 448" enable-background="new 0 0 544 448" xml:space="preserve">
                <path className={`draw`} opacity="1.000000" fill='none' stroke={`${!isHome ? '#ccf381' : logoChange ? '#4831d4' : '#ccf381'}`} stroke-width="20" stroke-miterlimit="10"
                  d="M377.677155,278.764008 
            C361.988983,251.662964 346.296143,224.564651 330.614075,197.460068 
            C316.600525,173.239288 302.594116,149.014374 288.597565,124.783768 
            C286.641235,121.397011 284.251404,118.476982 280.594666,116.812195 
            C272.891113,113.305061 265.211060,116.393486 260.187256,125.090012 
            C240.191620,159.703873 220.210999,194.326401 200.229065,228.948166 
            C182.995041,258.808777 165.713333,288.642059 148.569809,318.554535 
            C143.660889,327.119781 145.707886,335.938538 153.189072,340.325867 
            C161.004425,344.909210 169.205780,342.543243 174.443176,333.988953 
            C176.315796,330.930359 178.666611,328.482910 181.529388,326.385101 
            C226.903580,293.135315 276.482727,285.190186 329.545898,303.418274 
            C347.857513,309.708649 366.874115,316.374207 376.205963,336.476654 
            C378.800293,342.065369 386.220795,343.695312 392.029602,341.992218 
            C402.033722,339.059082 406.248169,328.789703 400.946167,319.254639 
            C393.499695,305.863007 385.693146,292.671570 377.677155,278.764008"/>
              </svg>
              <motion.span
                initial={{ x: 50 }}
                animate={controls}
                transition={{ ease: [0.8, 0, 0, 0.8] }}
                className='logo-child1'>W</motion.span>
              <motion.span
                initial={{ x: -50 }}
                animate={controls2}
                transition={{ ease: [0.8, 0, 0, 0.8] }}
                className='logo-child2'>lid</motion.span>
            </h1>
          </Link>

          <div className={`menu-icon ${!isHome && 'menu-green open-green'} ${isMenuOpen && 'open'} ${colorChange && 'menu-green'}`} onClick={toggleMenu}>
          </div>

          <nav className={`menu ${isMenuOpen && "menu-open"} ${!isHome && 'menu-black-green'}`}>
            <motion.div
              animate={{ display: isMenuOpen ? 'flex' : 'none' }}
              transition={{ delay: isMenuOpen ? 0.3 : 0 }}
              className='menu-items'>

              <motion.ul
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
              >
                <Link to={'/work'}>
                  <li onClick={closeMenu}>My Work</li>
                </Link>
                <li onClick={closeMenu}>My Shelf</li>

                <a href={'/resume'} target='_blank'>
                  <li onClick={closeMenu}>My Resume</li>
                </a>
              </motion.ul>

              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ delay: .1 }}
              >
                <p>say hello</p>
                <ul>
                  <a href='mailto:aitwalid2000@gmail.com' onClick={closeMenu}>aitwalid2000@gmail.com</a>
                  <a href='https://www.linkedin.com/in/walidaitharma/' target='_blank' onClick={closeMenu}>in/walidaitharma</a>
                </ul>
              </motion.div>

              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 20, opacity: 0 }}
                transition={{ delay: .2 }}
                className='socials'>
                <a onClick={closeMenu}>fb</a>
                <a onClick={closeMenu}>in</a>
                <a onClick={closeMenu}>yt</a>
                <a onClick={closeMenu}>gh</a>
              </motion.div>

            </motion.div>
          </nav>
        </div>
      </header>}
    </>
  )
}

export default Header