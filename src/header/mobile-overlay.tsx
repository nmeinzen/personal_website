import React from 'react';

export const MobileOverlay = ({ navbarOpen, setNavbarOpen }) => {

return (
    <nav>
        <ul>
          <li>
            <a href="/"         
            onClick={() => {
            setNavbarOpen(false);
        }}>Home</a>
          </li>
          <li>
            <a href="/about-me"
             onClick={() => {
            setNavbarOpen(false);
        }}>About Me</a>
          </li>
          <li>
            <a href="/resume"         
            onClick={() => {
            setNavbarOpen(false);
        }}>Resume</a>
          </li>
          <li>
            <a href="/projects"         
            onClick={() => {
            setNavbarOpen(false);
        }}>Project</a>
          </li>
        </ul>
      </nav>
    );
}