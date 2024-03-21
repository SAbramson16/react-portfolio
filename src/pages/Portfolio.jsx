export default function ProjectPage() {
  return (
    <div className="container pt-4">
      <p className="portfolio-p">
        Click a project image to see the deployed application. 
      </p>
      <section className="features-icons bg-light text-center">
        <div className="container project-page">
          <div className="row p-6">
            <div className="project-card col-lg-5">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3 className="portfolio-header">Code Quiz</h3>
                <a href="https://sabramson16.github.io/code-quiz/"><img src="\images\code-quiz.png" className="col-sm-10 project-img"></img></a>
                <p className="lead mb-0 link">
                <a className="github-link" href="https://github.com/SAbramson16/code-quiz">Github Repository</a>
                </p>
              </div>
            </div>
            <div className="project-card col-lg-5">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3 className="portfolio-header">Text Editor</h3>
                <a href=" https://jate-text-editor-vpth.onrender.com/"><img src="\images\text-editor screenshot.png" className="col-sm-10 project-img"></img></a>
                <p className="lead mb-0 link">
                <a className="github-link" href="https://github.com/SAbramson16/text-editor">Github Repository</a>
                </p>
              </div>
            </div>
            <div className="project-card col-lg-5">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3 className="portfolio-header">Random Password Generator</h3>
                <a href="https://sabramson16.github.io/password-generator/"><img src="\images\pass-gen.png" className="col-sm-10 project-img"></img></a>
                <p className="lead mb-0 link"> 
                <a className="github-link" href="https://github.com/SAbramson16/password-generator">Github Repository</a>
                </p>
              </div>
            </div>
            <div className="project-card col-lg-5">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3 className="portfolio-header">Employee Tracker</h3>
                <a href="https://drive.google.com/file/d/14cqS4adv-N9hgT42FDJjQmoMoK1AFiwq/view"><img src="\images\employee-screenshot.png" className="col-sm-10 project-img"></img></a>
                <p className="lead mb-0 link">
                <a className="github-link" href="https://github.com/SAbramson16/employee-tracker">Github Repository</a>
                </p>
              </div>
            </div>
            <div className="project-card col-lg-5">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3 className="portfolio-header">Weather Dashboard</h3>
                <a href="https://sabramson16.github.io/weather-dashboard/"><img src="\images\weather-screenshot.png" className="col-sm-10 project-img"></img></a>
                <p className="lead mb-0 link">
                <a className="github-link" href="https://github.com/SAbramson16/weather-dashboard">Github Repository</a>
                </p>
              </div>
            </div>
            <div className="project-card col-lg-5">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3 className="portfolio-header">Doodle Drop</h3>
                <a href="https://doodledrop-7357eeb23db1.herokuapp.com/"><img src="\images\doodle-screenshot.png" className="col-sm-10 project-img"></img></a>
                <p className="lead mb-0 link"> 
                <a className="github-link" href="https://github.com/RecceRaven/DoodleDrop">Github Repository</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
