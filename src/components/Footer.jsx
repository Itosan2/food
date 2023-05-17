import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <i className="fas fa-envelope footer-item"></i>

        <a href="www.facebook.com" target="_blank">
          <i className="fab fa-facebook-f footer-item"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-twitter footer-item"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-github footer-item"></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-youtube footer-item"></i>
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Food Website</p>
      </div>
    </footer>
  );
}
