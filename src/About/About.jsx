import React from 'react'
import img1 from "./photo.png"
import "./about.css"

function About() {
  return (
    <>

      <section className='about' id='about'>
            <h2 className='heading'>About<span> Me</span></h2>

            <div className='about-img'>
              <img src={img1} alt=''/>
              <span className='circle-spin'></span>
            </div>

          <div className='about-content'>
            <h3>Front End Developer</h3>
            <p>I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. My very passion is web devepment.</p>
          </div>
          <div className='btn-box btns' id='abt-btn'>
            <a href="#skills" className="btn">Read More</a>
          </div> 
      </section>

    </>
  )
}

export default About