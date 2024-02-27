import React from 'react';
import './component.css';
import { Link } from 'react-router-dom';
import Container from './Container';

export default function Footer() {
  return (
    <Container>
    <footer className='footer-container'>
        <ul className='footer-logo'><img src='logo.svg' alt='fooer-logo'/></ul>
        <ul className='footer-content1'>
          <li>Doormat Navigation</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
        </ul>
        <ul className='footer-content2'>
          <li>Contact</li>
          <li><Link to="https://goo.gl/maps/jeuDZSNTDt5kXUTbA">19/20 Royal Hibernian Way, Duke Lane Upper, Dublin 2</Link></li>
          <li><Link >Phone: 01-905 8777</Link></li>
          <li><Link >email: hello@littlelemon.ie</Link></li>
        </ul>
        <ul className='footer-content3'>
          <li>Social Media Links</li>
          <li><Link to="/https://www.facebook.com/LittleLemonRHW/"><img src='facebook.png' alt='facebook' width={35}/></Link></li>
          <li><Link to="/https://twitter.com/LittleLemonRHW/"><img src='instagram.png' alt='instagram' width={35}/></Link></li>
          <li><Link to="/https://www.instagram.com/LittleLemonRHW/"><img src='twitter.png' alt='twitter' width={35}/></Link></li>
        </ul>
        <div className="copyright">
          <hr />
          <p>&copy; 2024 - Meta Front-End Capstone developed by Honglin Chen</p>
        </div>
    </footer>
    </Container>
  )
}
