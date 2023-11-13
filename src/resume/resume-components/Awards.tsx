import "./Awards.css";
import React from 'react';


export const Awards = ({ awards }) => {
  return (
    <div className="awards">
      <h2>Awards</h2>
      <ul>
        {awards.map((award, index) => (
          <li key={index}>{award}</li>
        ))}
      </ul>
    </div>
  );
};
