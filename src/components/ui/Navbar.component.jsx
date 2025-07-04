import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import './Navbar.css';


const NavbarComponent =() => {

  const btnToggelRef = useRef();

  const toggelNavbar = () => {
    btnToggelRef.current.click();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
          <div className="d-flex align-items-center"  >
            <FaCoins  className="navbar-logo-icon"/>
            <span className="navbar-logo-text">Crypto Tracker</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={btnToggelRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={toggelNavbar}>
              <Link className="nav-link" to="/" >
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={toggelNavbar}>
              <Link className="nav-link" to="/faq" >
                FAQ
              </Link> 
            </li>
            <li className="nav-item" onClick={toggelNavbar}>
              <Link className="nav-link" to="/contact-us" >
                Contact Us
              </Link>
            </li>
            <li className="nav-item" onClick={toggelNavbar}>
              <Link className="nav-link" to="/about-us" >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  }

export default NavbarComponent;
