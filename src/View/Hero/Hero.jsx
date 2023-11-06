import React from 'react'
import "./Hero.css"
import Nav from '../../components/nav/Nav'
import firebase from "./core-firebase.svg"
import react from "./react.svg"
import node from "./node.svg"
import mongo from "./mongo.svg"
import flutter from "./flutter.svg"
import person from "./person.jpg"
const Hero = () => {
  return (
    <div>
      <div className="hero-main">
        <div className="navbar">
          <Nav/>
        </div>
        <div className="hero-text">
            <div className="upper-light">
                <p>Connect With One Click</p>
              <a href="mailto:nikhildesign00@gmail.com">
              <img src={person} alt="person" />
              </a>
            </div>
            <div className="mid-bold-text">
              <h1>Hey, My Name is Nikhil Kumar , <br /> Am A Full Stack Developer</h1>
            </div>
            <div className="bottom-light-text">
              <p>Expand your design skillset through live workshops, a-sync <br />lessons, and connect with like-minded individuals.</p>
            </div>
           <a href="mailto:nikhildesign00@gmail.com">
           <div className="hero-button">
              <p>Get Started</p>
            </div>
           </a>
        </div>

        <div className="core">
          <h3>The Core Tech-Stack</h3>
          <p className="core-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>

          <div className="core-images">
            <img src={firebase} alt="firebase" />
            <img src={react} alt="react" />
            <img src={mongo} alt="mongo" />
            <img src={flutter} alt="flutter" />
            <img src={node} alt="node" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
