import "./ResumeCard.css";

export const ResumeCard = (experience) => {
  return (
    <div className="job-card">
      <div className="left-column">
        <h3>{experience.title}</h3>
        <p className="company">{experience.company}</p>
        <p className="date-range">{experience.dateRange}</p>
      </div>
      <div className="divider"></div>
      <div className="right-column">
        <ul className="accomplishments">
          {experience.accomplishments.map((accomplishment, index) => (
            <li key={index}>{accomplishment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
