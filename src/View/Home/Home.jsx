import React from 'react'
import "./Home.css"
import Hero from '../Hero/Hero'
import About from '../about/About'
import Project from '../projects/Project'
import Skill from '../skills/Skill'
import Learning from '../skills/Learning'
import Footer from '../footer/Footer'
import Hackathon from '../Acvievement/Hackathon'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Project/>
    <Hackathon/>
    <Skill/>
    <Learning/>
    <Footer/>
    </>
  )
}

export default Home
