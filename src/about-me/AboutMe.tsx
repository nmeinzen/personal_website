import { Header } from "../header/Header";
import "./AboutMe.css";
import headshot from "../images/headshot.jpg";

export const AboutMe = () => {
  return (
    <>
      <Header />

      <div className="outer-container">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-4">
              <img src={headshot} className="headshot-photo" />
            </div>
            <div className="col-8">
              <p className="about-me-paragraph">
                Hello world! I'm Natasha, a seasoned code explorer with 4 years
                of navigating the digital terrain. For the past two years, I've
                been on an exhilarating journey with React, sculpting user
                interfaces and crafting seamless experiences.
              </p>

              <p className="about-me-paragraph">
                In my coding backpack, you'll find not just lines of code but a
                dedication to quality. I'm a firm believer in the power of
                testing—making sure every piece of the puzzle fits snugly. If
                code is a journey, then tests are the trusty compass guiding us
                through uncharted territories.
              </p>

              <p className="about-me-paragraph">
                Having honed my skills in agile practices, I thrive in the
                dynamic dance of sprints and stand-ups. It's not just about
                writing code; it's about fostering collaboration, adapting to
                change, and delivering value at every milestone.
              </p>

              <p className="about-me-paragraph">
                When it comes to React, I'm more than just a novice. From
                crafting functional components to taming the intricacies of
                hooks, I'm steadily becoming fluent in the React dialect. And,
                just like the development lifecycle, I recognize that every
                project has its seasons—from conception and design to deployment
                and beyond.
              </p>

              <p className="about-me-paragraph">
                Outside the realms of code, you'll find me chasing sunsets in
                different time zones, exploring trails, diving into the pages of
                captivating books, and savoring the perfect cup of coffee. Life
                is not just about the code we write but the adventures we embark
                on and the stories we discover.
              </p>

              <p className="about-me-paragraph">
                So, let's not just build code; let's craft experiences, forge
                connections, and make each project a chapter in the grand
                adventure of life and code. Ready to embark on this journey
                together?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
