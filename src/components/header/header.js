import React, { createRef } from "react";
import "./header.scss";
import logo from "./logo.png";

function menu(text, id) {
  return (
    <a href={`#${id}`} className="menu">
      {text}
    </a>
  );
}

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="" />
        <nav className="nav">
          <a href={`#${id}`} className="menu">
            {text}
          </a>
          {menu("Home", "home")}
          {menu("Skills", "skills")}
          {menu("About Us", "about")}
          {menu("Pricing", "pricing")}
          {menu("Contacts", "contacts")}
          <div className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </nav>
        <div className="talk-btn">Let's Talk</div>
        <div className="menu-icon menu-btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    );
  }
}
