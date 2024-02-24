import React from 'react';
import './component.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Container from './Container';

export default function Footer() {
  return (
    <Container>
    <footer className='footer-container'>
      <Router>
        <ul className='footer-logo'><img src='logo.svg' alt='fooer-logo'/></ul>
        <ul className='footer-content1'>
          <li>Doormat Navigation</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
            <li><Link to="/OrderOnline">Order Online</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ul>
        <ul className='footer-content2'>
          <li>Contact</li>
          <li><Link to="/Address">Address</Link></li>
          <li><Link to="/phoneNumber">phone number</Link></li>
          <li><Link to="/email">email</Link></li>
        </ul>
        <ul className='footer-content3'>
          <li>Social Media Links</li>
          <li><Link to="/Address">Address</Link></li>
          <li><Link to="/phoneNumber">phone number</Link></li>
          <li><Link to="/email">email</Link></li>
        </ul>
      </Router>
    </footer>
    </Container>
  )
}
