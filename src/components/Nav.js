import React, { useState } from "react";
import './component.css';
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Nav() {
  const [isNavContentVisible, setIsNavContentVisible] = useState(false);

  return (
      <nav>
        <Container>
        <ul className="nav-container">
          <li className="logo">
            <img src="Logo.svg" alt="logo" />
          </li>
          <li className="nav-toggle" id="navToggle" onClick={() => setIsNavContentVisible(!isNavContentVisible)}>
            <img src='bars-solid.svg' alt="toggle" height={40} width={40}/>
          </li>
          <li>
            <ul className={`nav-content ${isNavContentVisible ? 'active' : ''}`} id="navContent">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutUs">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/booking">Reservations</Link></li>
            </ul>
          </li>
        </ul>
        </Container>
      </nav>
  );
}
