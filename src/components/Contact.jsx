import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          inventore voluptatum? Neque, debitis. omnis beatae enim.
        </p>
      </div>
      <div className="contact-container">
        <div className="contactInfo">
          <div className="contact-box">
            <div className="icon">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Puchong Malaysia</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="icon">
              <i class="fa fa-phone-square" aria-hidden="true"></i>
              <i class="fa-solid fa-square-phone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>012-3456 7890</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="icon">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>abc@email.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form action="">
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required="required"></textarea>
              <span>Type your Message ...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" required="required" value="send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
