import { Header } from "../header/Header";
import resume from "./Natasha_Meinzen_Resume.pdf";
import { Button } from "../components/Button";
import "./Resume.css";
import ExamplePDFViewer from "./pdf-viewer";
import React from 'react';


// const jobExperience1 = {
//   company: "Vanguard Group Europe GmbH, Berlin, DE",
//   title: "Application Engineer II",
//   dateRange: "Oct 2022 - Present",
//   accomplishments: [
//     "Successfully designed, built, and actively maintained over 50 distinct and reusable React components",
//     "Implemented dynamic client-side routing with React Router",
//     "Developed and maintained a comprehensive suite of 300+ unit and integration tests",
//     "Reduced public page load time by 65%, which tripled our web search numbers",
//     "Enabled toggle audiences allowing comprehensive testing prior to production changes",
//     "Identified and resolved 6 critical security vulnerabilities",
//     "Maintained a 96% web accessibility score",
//     "Spearheaded Headful AEM implementation for public landing pages, resulting in a 93% reduction in time required for launching marketing campaigns",
//     "Implemented 40+ Adobe Analytics tracking events, enhancing data collection and analysis",
//     "Shaped product road-maps by extrapolating insights from user research studies"
//   ]
// };

// const jobExperience2 = {
//   company: "The Vanguard Group, Inc, Charlotte, NC, USA",
//   title: "Technology Leadership Program",
//   dateRange: "Feb 2020 - Oct 2022",
//   accomplishments: [
//     "Collaborated with cross-functional teams, including designers, back-end developers, and qualityassurance, to ensure a bug-free and visually appealing website for its successful public launch",
//     "Conducted daily async code reviews and testing to support a global team, ensuring high-quality code",
//     "Introduced an additional mobile breakpoint to enhance mobile-first responsive web design",
//     "Planned and facilitated quarterly cross-site engagement events for over 30 individuals",
//     "Supervised a team of four interns, achieving a 100% rate of return offers extended and accepted",
//     "Championed the agile transformation of two teams, fostering a new way of collaborative working",
//     "Proactively managed stakeholder relationships across 4 products, ensuring clear communication, alignment, and satisfaction with project progress and outcomes.",
//     "Co-lead the summer intern project, achieving a 96% participation rate",
//     "Managed 32 Tableau licenses, ensuring seamless company-wide user access to data analytics tools",
//     "Led the integration of AWS Athena with Tableau to enable advanced big data query visualization",
//     "Served as Chief of Staff for the Talent Acquisition and Retention Committee, overseeing meetings, managing minutes, and coordinating subcommittees"
//   ]
// };

// const resumeItems = [jobExperience1, jobExperience2];

// const contactInfo = {
//   name: "Your Name",
//   address: "Your Address",
//   phone: "Your Phone",
//   email: "Your Email"
// };

// const skills = ["JavaScript", "React", "HTML", "CSS", "Git"];

// const awards = ["Outstanding Developer Award", "Tech Innovation Prize"];

export const Resume = () => {
  return (
    <>
      <Header />
      <div className="outer-container">
        <div className="check-back-soon-container">
          <p>
            Web view coming soon! In the mean time, please feel free to
            view/download my resume below.
          </p>
          <a
            href={resume}
            download="Resume_Natasha_Meinzen"
            target="_blank"
            rel="noreferrer"
          >
            <Button text={"Download Resume"}></Button>
          </a>

          <ExamplePDFViewer />
        </div>
      </div>

      {/* <ContactInfo {...contactInfo} />
      <Skills skills={skills} />
      {resumeItems.map((item) => {
        return <ResumeCard {...item} />;
      })}
      <Awards awards={awards} /> */}
    </>
  );
};
