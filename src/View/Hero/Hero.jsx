import React from 'react'
import "./Hero.css"
import Nav from '../../components/nav/Nav'
import firebase from "./core-firebase.svg"
import react from "./react.svg"
import node from "./node.svg"
import mongo from "./mongo.svg"
import flutter from "./flutter.svg"
import person from "./user.jpg"
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
              <h1>Hey, My Name is <span> Nikhil Kumar</span>  <br /> Am A Full Stack Developer</h1>
            </div>
            <div className="bottom-light-text">
              <p>computer science student with passion for cross platform dev  & Web App dev looking  for internship <br /> where i can apply my  skills! and highly motivated  to learn new technologies!</p>
            </div>

            <div className="hero-button">
             <a href="https://www.linkedin.com/in/nikhil-kumar-1043b7239/">
             <div className="connect-button">
                <p>Connect⚡</p>
              </div>
             </a>
              <a href="https://github.com/voiiddxx">
              <div className="github-button">
                <p>Star on Github 💫</p>
              </div>
              </a>
            </div>
          
        </div>

        <div className="core">
          <h3>The Core Tech-Stack</h3>
          <p className="core-detail">
            The Core tech Stack currently am working on
          </p>

          <div className="core-images">
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-5645899-4695757.png?f=webp" alt="firebase" />
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-flutter-9294855-7577998.png" alt="react" />
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-4-1175139.png" alt="mongo" />
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-java-script-5645832-4695690.png?f=webp" alt="flutter" />
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png" alt="node" />
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Hero
