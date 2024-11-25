import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/logos/transparentLogo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navigation">
      <div className="navigation__logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="navigation__bar">
        <button className="navigation__toggle" onClick={toggleMenu}>
          <span className="navigation__toggle-line"></span>
          <span className="navigation__toggle-line"></span>
          <span className="navigation__toggle-line"></span>
        </button>
      </div>
      <nav
        className={`navigation__menu ${
          menuOpen ? "navigation__menu--open" : ""
        }`}
      >
        <a href="#home" className="navigation__link">
          Home Page
        </a>
        <a href="#services" className="navigation__link">
          Services
        </a>
        <a href="#assessment" className="navigation__link">
          Assessment
        </a>
        <a href="#contact" className="navigation__link">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
