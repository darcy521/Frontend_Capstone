import React from 'react';
import './component.css';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <ul className='footer-logo'><img src='logo.svg' alt='fooer-logo'/></ul>
      <ul className='footer-content1'>
        <li>Doormat Navigation</li>
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Menu">Menu</a></li>
        <li><a href="/Reservations">Reservations</a></li>
        <li><a href="/OrderOnline">Order Online</a></li>
        <li><a href="/Login">Login</a></li>
      </ul>
      <ul className='footer-content2'>
        <li>Contact</li>
        <li><a href="/Address">Address</a></li>
        <li><a href="/phoneNumber">phone number</a></li>
        <li><a href="/email">email</a></li>
      </ul>
      <ul className='footer-content3'>
        <li>Social Media Links</li>
        <li><a href="/Address">Address</a></li>
        <li><a href="/phoneNumber">phone number</a></li>
        <li><a href="/email">email</a></li>
      </ul>
    </footer>
  )
}
