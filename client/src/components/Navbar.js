import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav classname="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span>Covid-19 Early Assestment &nbsp;&nbsp;</span>
            <i class="fas fa-shield-virus"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/covid" className="nav-links" onClick={closeMobileMenu}>
                Covid-19
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/selftool"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Self Assestment
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
