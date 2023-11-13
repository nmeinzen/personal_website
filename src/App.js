import "./styles.css";
import { HomePage } from "./home-page/HomePage.tsx";
import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./about-me/AboutMe.tsx";
import { Resume } from "./resume/Resume.tsx";
import { Projects } from "./projects/Projects.tsx";
import React from 'react'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </>
  );
}
