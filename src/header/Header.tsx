import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./Header.css";
import React, { useState } from 'react';
import { MobileMenu } from "./MobileMenu";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = isMenuOpen ? ' active' : '';

  return (
    <>
    <div className="mobile-menu">
      <MobileMenu></MobileMenu>

      </div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className={`nav-link ${isActive}`} aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive}`} aria-current="page" to="/about-me">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive}`} aria-current="page" to="/resume">
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${isActive}`} aria-current="page" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
     
    </>
  );
};
