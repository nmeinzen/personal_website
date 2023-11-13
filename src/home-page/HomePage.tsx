import "./HomePage.css";
import { Header } from "./../header/Header.tsx";
import { Button } from "./../components/Button.tsx";
import { Link } from "react-router-dom";
import React from 'react';


export const HomePage = () => {
  return (
    <>
      <div className="top_section">
        <Header />
        <div className="outer-container custom-outer-container">
          <div className="name_flex_container">
            <div className="name_container">
              <h4 className="intro_phrase">Hello! I'm</h4>
              <h2 className="intro_name">Natasha Meinzen</h2>

              <div className="description">
                <div className="description_intro">I am a(n) </div>
                <div style={{ width: "15px" }} />
                <div className="description_scroller">
                  <span>
                    Innovative Problem Solver
                    <br />
                    Enthusiast Tech Leader
                    <br />
                    Collaborative Team Player
                    <br />
                    Strategic React Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll_flex_container">
            <a className="down-arrow" href="#content"></a>
          </div>
        </div>
      </div>

      <div
        className="outer-container"
        style={{ background: "#727a6b" }}
        id="content"
      >
        <h1 className="story_header">My Story</h1>
      </div>

      {/* The following timeline I got from: https://codepen.io/alvarotrigo/pen/VwMZjjQ */}

      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <div className="timeline-content">
                    <div className="content">
                      <span className="year">September 2015</span>
                      <h3 className="title h4">University of Minnesota</h3>
                      <p className="description">
                        I began studying at the Unviersity of Minnesota Twin
                        Cities in 2015 majoring in Chemical Engineering. I have
                        always loved science and chemistry lab were always the
                        highlights of my week in high school. However, shortly
                        after beginning to study, I realized Chemical Engineer
                        was more math than chemistry, so I decided to pivot
                        gears. Thus began my journey as a computer scientist.
                      </p>
                      <div className="icon">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <div className="content">
                      <span className="year">August 2017</span>
                      <h3 className="title h4">Semester Exchange in Hawaii</h3>
                      <p className="description">
                        In the fall of 2017, I did a student exchange at the
                        University of Hawaii Manoa. This is when I took my first
                        official software engineering course, which gave me a
                        wholistic view of software development, not just
                        individual languages. I completed my first group coding
                        assignment where we had to build a website for
                        University of Hawaii students to use. You can find the
                        code base Here:
                        https://github.com/islandwanderer/islandwanderer and
                        information about it here:
                        https://islandwanderer.github.io/
                      </p>
                      <div className="icon">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <div className="content">
                      <span className="year">May 2018</span>
                      <h3 className="title h4">Project Manager Internship</h3>
                      <p className="description">
                        In 2017 I completed my first internship at Optum as
                        Project Manager in the Technology Development Internship
                        Program. My team's task was to perform market research
                        to better understand Big Data platforms in healthcare
                        and develop various business use cases based on the
                        market. We then created strategic and prioritized
                        roadmaps based on the use cases. While I wasn't coding,
                        I learned quite a bit about the first two components of
                        Lifecycle Design: Project Planning and Requirements
                        Gathering & Analysis.
                      </p>
                      <div className="icon">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <div className="content">
                      <span className="year">May 2019</span>
                      <h3 className="title h4">Presales Engineer Intern</h3>
                      <p className="description">
                        The following summer, I decided to switch things up and
                        intern at Dell as a Presales Engineer. Throughout the
                        summer, I was tasked with building customzied,
                        full-solution portfolios for various clients. If my
                        internship at Optum taught me the importance of research
                        and gathering requirements, my internship at Dell taught
                        me how to manage uncertainty and make solutions and
                        recommendations with the information given.
                      </p>
                      <div className="icon">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <div className="content">
                      <span className="year">December 2019</span>
                      <h3 className="title h4">Graduation</h3>
                      <p className="description">
                        In December of 2019, I graduated with a Bachelors in
                        Science in Computer Science and minors in Astrophysics
                        and German. No, I had no clue if I would ever use those
                        two minors, I just thought they were interesting topics
                        and loved learning. But I wanted to start my career off
                        strong in the development world, so I began my
                        professional career at Vanguard in the Technology
                        Development Program.
                      </p>
                      <div className="icon">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <div className="content">
                      <span className="year">February 2020</span>
                      <h3 className="title h4">
                        Technology Leadership Program
                      </h3>
                      <p className="description">
                        Over the course of 2.5 years I rotated across 4 divisons
                        in Vanguard, each with a different role. I began as a
                        front-end developer using React where I learned many
                        'coding best practices', especially in the corporate
                        world. I then rotated to the Chief Technology Office as
                        a Tableau Infrastructure Engineer. This rotation refined
                        my abilities to communiate with stakeholder and manage
                        3rd party vendor relations. My next rotation began as a
                        Python developer but quickly pivoted to being a Scrum
                        Master as the team was in need of one. Here I learned
                        many of the agile methodologies and how to apply them to
                        a team. My final rotation was back as a front-end
                        developer using React working on Vanguard Germany's
                        retail website. If you would like to see more details of
                        my accomplishments, please check out my resume here:
                        RESUME!!!
                      </p>
                      <div className="icon">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="timeline">
                  <div className="timeline-content">
                    <div className="content">
                      <span className="year">July 2022</span>
                      <h3 className="title h4">Software Developer 2</h3>

                      <p className="description">
                        At the complete of TLP, I "launched" into a mid-level
                        software position on my final rotation's team. This
                        included a relocation from the United States to Berlin,
                        Germany. As a member of the Onboarding and Attract team,
                        I was responsible for building out the site's public
                        pages, creating two onboarding flows for different
                        products, and general maintenace of the front-end code
                        base.
                      </p>

                      <div className="icon">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="outer-container" style={{ background: "#727a6b" }}>
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-center">
            <div className="learn-more-container">
              <p className="description_phrase">Learn more about my skills!</p>
              <Link to="/resume">
                <Button text={"Resume"} />
              </Link>
            </div>
          </div>
          <div className="col-sm-6 d-flex justify-content-center ">
            <div className="learn-more-container">
              <p className="description_phrase">Wanna learn more about me?</p>
              <Link to="/about-me">
                <Button text={"About Me"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
