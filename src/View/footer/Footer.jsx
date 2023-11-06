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
        <Linkedin color='#fe7676' />
        <Github color='#3dfffc' />
        <Mail color='#ffe53d' />
        </div>
    </div>
  )
}

export default Footer
