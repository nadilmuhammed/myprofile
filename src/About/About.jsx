import React from 'react'
import img1 from "./photo.png"

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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse doloribus similique quas sed magni et accusamus, maxime ut, repellat numquam? Hic assumenda eaque natus. Nesciunt, sequi sed vero deserunt dignissimos pariatur voluptates nobis totam eaque assumenda quibusdam eius rem magni delectus doloremque ducimus vel perferendis dicta dolores quo neque?</p>
          </div>
          <div className='btn-box btns'>
            <a href="#" className="btn">Read More</a>
          </div> 
      </section>

    </>
  )
}

export default About