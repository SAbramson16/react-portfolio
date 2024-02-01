import React from "react";

const Resume = ({ onButtonClick }) => {
  return (
    <>
      <section className="resume-page">
        <h2 className="proficiencies">Proficiencies:</h2>
            <ul className="proficiencies-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>SQL/Sequelize</li>
                <li>NOSQL</li>

            </ul>
        <p className="resume-p">Click here to download PDF file</p>
        <button className="pdf-btn" onClick={onButtonClick}>Download PDF</button>
      </section>
    </>
  );
};

export default Resume;