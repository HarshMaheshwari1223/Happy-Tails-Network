import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Css/Navbar.css'; // Import the CSS for styling
import logo from '../Assets/logo.jpg'; // Import the logo image
import Find_a_pet from './Find_a_pet';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsCollapsed(true); // Collapse navbar when scrolled down
      } else {
        setIsCollapsed(false); // Expand navbar when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-container">
        {/* Add the logo inside the navbar-logo div */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>
        <ul className={`navbar-list ${isCollapsed ? 'hidden' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Find_a_pet">Find a Pet</Link></li>
          <li><Link to="/AdoptionInfo">Adoption Info</Link></li>
          <li><Link to="/Pet_care">Pet Care</Link></li>
        </ul>
        <div className={`hamburger-menu ${isCollapsed ? '' : 'hidden'}`} onClick={() => document.querySelector('.navbar-list').classList.toggle('hidden')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
