import React from "react";
import "./Footer.scss";
import linkedinicon from "../../assets/icons/Icon-linkedin.png";
import instagramicon from "../../assets/icons/Icon-instagram.png";
import twittericon from "../../assets/icons/Icon-twitter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4 className="footer__title">About Us</h4>
          <p className="footer__section-description">
            We are dedicated to helping businesses achieve sustainability goals
            through tailored consulting services.
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li>
              <a href="/" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="footer__link">
                Services
              </a>
            </li>

            <li>
              <a href="/assessment" className="footer__link">
                Assessment
              </a>
            </li>
            <li>
              <a href="/contact" className="footer__link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__title">Connect With Us</h4>
          <div className="footer__socials">
            <a href="https://www.linkedin.com">
              <img
                src={linkedinicon}
                alt="LinkedIn"
                className="footer__social-icon"
              />
            </a>
            <a href="https://www.twitter.com">
              <img
                src={twittericon}
                alt="Twitter"
                className="footer__social-icon"
              />
            </a>
            <a href="https://www.instagram.com">
              <img
                src={instagramicon}
                alt="Instagram"
                className="footer__social-icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2025 ENVR Consulting Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
