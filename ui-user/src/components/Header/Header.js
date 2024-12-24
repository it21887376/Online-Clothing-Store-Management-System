import React, { useState } from "react";
import "./styles.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/#" className="nav__brand">
      FT Marketing
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/promotion" className="nav__link">
            Promotion
          </a>
        </li>
        <li className="nav__item">
          <a href="/Inventory" className="nav__link">
          Inventory
          </a>
        </li>
        <li className="nav__item">
          <a href="/AddToCard" className="nav__link">
          Add To Cart
          </a>
        </li>
        <li className="nav__item">
          <a href="/Profile" className="nav__link">
          Profile
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;