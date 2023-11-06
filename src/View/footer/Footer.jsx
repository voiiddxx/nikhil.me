import React from 'react'
import "./Footer.css"
import footerimage from "./me.jpg"
import { Github, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  return (
    <div className="footer-main">
        <img src={footerimage} alt="footerimage" />
        <h2>Nikhil Kumar</h2>
        <p>Connect With me</p>
        <div className="connect-icons">
        <a href="https://www.linkedin.com/in/nikhil-kumar-1043b7239/"><Linkedin color='#fe7676' /></a>
    <a href="https://github.com/voiiddxx">    <Github color='#3dfffc' /></a>
        <a href="mailto:nikhildesign00@gmail.com"><Mail color='#ffe53d' /></a>
        </div>
    </div>
  )
}

export default Footer
