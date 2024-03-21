import resume from "/SharonAbramsonResume.pdf"

export default function ResumePage() {
    return (
      <div className="resume-page">
        <h2 className="proficiencies">Proficiencies:</h2>
            <div className="proficiencies-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>SQL/Sequelize</li>
                <li>GraphQL</li>
                <li>React</li>
            </div>
        <a className="resume-link" href={resume} download={resume}>
        Click to Download Resume 
      </a>
      </div>
    );
  }
  