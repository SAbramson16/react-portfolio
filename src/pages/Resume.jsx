import resume from "../assets/resume.pdf"

export default function ResumePage() {
    return (
      <div className="resume-page">
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
        <a className="resume-link" href={resume} download={resume}>
        Click to Download Resume 
      </a>
      </div>
    );
  }
  