import React, { useState } from "react";
import './component.css';

export default function Nav() {
  const [isNavContentVisible, setIsNavContentVisible] = useState(false);

  return (
    <nav>
      <ul className="nav-container">
        <li className="logo">
          <img src="Logo.svg" alt="logo" />
        </li>
        <li className="nav-toggle" id="navToggle" onClick={() => setIsNavContentVisible(!isNavContentVisible)}>
          <img src='bars-solid.svg' alt="toggle" height={40} width={40}/>
        </li>
        <li>
          <ul className={`nav-content ${isNavContentVisible ? 'active' : ''}`} id="navContent">
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/Reservations">Reservations</a></li>
            <li><a href="/OrderOnline">Order Online</a></li>
            <li><a href="/Login">Login</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
