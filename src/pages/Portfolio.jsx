export default function AboutPage() {
  return (
    <div className="container pt-4">
      <p>
        Here are three projects I have worked on during the course of the coding bootcamp. 
      </p>
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Doodle Drop</h3>
                <a href="https://doodledrop-7357eeb23db1.herokuapp.com/"><img src="https://github.com/RecceRaven/DoodleDrop/assets/149850541/e2607894-83fe-4613-acf0-d14e253e2afb" className="col-sm-10"></img></a>
                <p className="lead mb-0">
                DoodleDrop is a web application designed to allow artists to share their art. The user must be logged in to post comments and artwork. The user may elect to upload their art and categorize it based on the style of art whether a sketch, realistic portrait, etc. You may also make comments on posted art pieces. 
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Code Quiz</h3>
                <a href="https://sabramson16.github.io/code-quiz/"><img src="\src\assets\images\code-quiz.png" className="col-sm-10"></img></a>
                <p className="lead mb-0">
                This project is a short quiz, testing basic knowledge of Javascript concepts. 
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Text Editor</h3>
                <a href=" https://jate-text-editor-vpth.onrender.com/"><img src="\src\assets\images\text-editor screenshot.png" className="col-sm-10"></img></a>
                <p className="lead mb-0">
                This application is a text editor that runs in the browser. The user is able to install the application and use it offline as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
