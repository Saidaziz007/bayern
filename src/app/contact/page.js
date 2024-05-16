import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <h1>CONTACTS</h1>
        </div>
      </div>
      <div className="contact-form">
        <div className="container">
          <form action="">
            <div className="contact-inputs">
              <div className="contact-input">
                <label htmlFor="">Your name</label>
                <input type="text" />
              </div>
              <div className="contact-input">
                <label htmlFor="">Your surname</label>
                <input type="text" />
              </div>
              <div className="contact-input">
                <label htmlFor="">Your phone</label>
                <input type="number" />
              </div>
              <div className="contact-input">
                <label htmlFor="">Your address</label>
                <input type="text" />
              </div>
            </div>
            <div className="contact-textarea">
              <label htmlFor="">Message</label>
              <textarea name="" id="" rows={10}></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
