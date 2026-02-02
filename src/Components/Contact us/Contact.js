import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-overlay">
        <div className="Contact-content">
          <div className="Team-heading Contact-heading">
            <div className="Team-h1 Contact-h1">
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="Form">
             <div className="form-content">
             <form action="" method="post">
              <h2 className="form-h2">Contact form</h2>
              <div className="con-name mb-3 text-black">
                <div className="first-name">
                  <label className="f-name" htmlFor="fname">First Name</label> <br />
                  <input type="text" id="fname" name="fname"  className="f-input"/>
                </div>
                <div className="last-name">
                  <label className="f-label" htmlFor="lname">Last Name</label><br />
                  <input type="text" id="lname" name="lname" className="f-input" />
                </div>
              </div>
              <div className="con-email text-black mb-3">
                
                  <label  htmlFor="email">Email</label><br />
                  <input type="email" id="email" name="email" className="email" />

              </div>
              <div className="con-subject text-black mb-3">
                
                  <label  htmlFor="subject">Subject</label><br />
                  <input type="text" id="subject" name="subject" className="email" />

              </div>
              <div className="con-message mb-3 text-black">
               <label htmlFor="message">Message</label>
               <textarea name="message" id="message " cols="30" rows="10"  placeholder="Leave Your message here..." required className="message"></textarea>
              </div>
              <div className="form-button">
                <input type="button" value="Send Message" className="btn btn-primary f-button"/>
              </div>
             </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
