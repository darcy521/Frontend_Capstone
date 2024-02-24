import React, { useState } from "react";
import './component.css';
import { Link, BrowserRouter as Router} from "react-router-dom";
import Container from "./Container";

export default function Nav() {
  const [isNavContentVisible, setIsNavContentVisible] = useState(false);

  return (
    <Router>
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
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Menu</Link></li>
              <li><Link to="/booking">Reservations</Link></li>
              <li><Link to="/">Order Online</Link></li>
              <li><Link to="/">Login</Link></li>
            </ul>
          </li>
        </ul>
        </Container>
      </nav>
    </Router>
  );
}
