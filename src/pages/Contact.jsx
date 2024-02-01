export default function Contact() {
    return (
      <div className="contact-page">
        <h1>Get in touch!</h1>
        <p>
         Please fill out this form with your name, email and message. 
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter name"></input>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Email</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email"></input>
          </div>
          <div>
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" className="btn">Send Message</button>
        </form>
        
      </div>
    );
  }
