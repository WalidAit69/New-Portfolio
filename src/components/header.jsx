import React, { useEffect, useState } from 'react';
import "./header.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function Header({ Colorchange, Logochange, isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = async () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className=''>
      <Link to={'/'}>
        <h1 className={`logo ${Logochange || isHome ? 'menu-purple' : ''}`}>
          <span
            className='logo-child1'>W</span>
          <span
            className='logo-min'>a</span>
          <span
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            className='logo-child2'>lid</span>
        </h1>
      </Link>

      <div className={`menu-icon ${isMenuOpen ? 'open' : ''} ${Colorchange ? 'menu-green' : ''}`} onClick={toggleMenu}>
      </div>

      <nav className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
        <motion.div
          animate={{ display: isMenuOpen ? 'flex' : 'none' }}
          transition={{ delay: isMenuOpen ? 0.3 : 0 }}
          className='menu-items'>

          <motion.ul
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
          >
            <Link to={'/work'}>
              <li>My Work</li>
            </Link>
            <li>My Shelf</li>
            <li>My Resume</li>
          </motion.ul>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: .1 }}
          >
            <p>say hello</p>
            <ul>
              <li>aitwalid2000@gmail.com</li>
              <li>in/walidaitharma</li>
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: .2 }}
            className='socials'>
            <a>fb</a>
            <a>in</a>
            <a>yt</a>
            <a>gh</a>
          </motion.div>

        </motion.div>
      </nav>
    </header>
  )
}

export default Header