import React from 'react'
import "./About.css"
import abouthero from "./stage1.jpg"
const About = () => {
  return (
    <div className="about-main">
        <div className="about-text">
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis natus excepturi tempore minima cum, mollitia aut quaerat autem ratione praesentium ea, error corrupti odit aperiam nesciunt! Possimus mollitia fugiat nemo maxime vitae, itaque corporis similique deserunt tenetur obcaecati, sunt adipisci voluptate nisi qui odio incidunt ut nihil molestiae magnam eos officia? Repellat, ipsa amet officia quo dicta soluta magni sunt error nihil nemo pariatur minima, nostrum quae possimus fugit numquam, quasi dolores cupiditate ad doloribus! Minus earum quam laboriosam! </p>
        </div>
        <div className="about-image">
    <img src={abouthero} alt="aboutherosvg" />
        </div>
    </div>
  )
} 

export default About
