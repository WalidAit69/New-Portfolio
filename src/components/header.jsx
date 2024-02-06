import React, { useEffect, useState } from 'react';
import "./header.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useHeaderStore from '../store/headerStore';


function Header() {
  const { colorChange, logoChange, isHome, isWorkdetail } = useHeaderStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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


  return (
    <header className={`${!isHome && 'header-blur'}`}>
      <div className="header">
        <Link to={'/'}>
          <h1 className={`logo ${logoChange && 'logo-purple'} ${!isHome && 'logo-green'}`}>
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
              <li onClick={closeMenu}>My Resume</li>
            </motion.ul>

            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 20, opacity: 0 }}
              transition={{ delay: .1 }}
            >
              <p>say hello</p>
              <ul>
                <li onClick={closeMenu}>aitwalid2000@gmail.com</li>
                <li onClick={closeMenu}>in/walidaitharma</li>
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
    </header>
  )
}

export default Header