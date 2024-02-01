export default function ResumePage() {
    return (
      <div>
        <p>
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
        <a href='../assets/resume.pdf' download="../assets/resume.pdf">
        Download Resume
      </a>
        </p>
      </div>
    );
  }
  