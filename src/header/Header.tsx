import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./Header.css";
import React from 'react';


export const Header = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about-me">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/resume">
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </>
  );
};
