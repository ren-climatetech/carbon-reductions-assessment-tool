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
      <a href="/"> 
          <img src={logo} alt="Company Logo" />
        </a>
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
        <a href="/" className="navigation__link">
          Home Page
        </a>
        {/* <a href="/admin" className="navigation__link">
          Admin Page
        </a> */}
        <a href="/assessment" className="navigation__link">
          Assessment
        </a>
        <a href="/contact" className="navigation__link">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
