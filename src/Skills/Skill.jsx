import React from 'react'
import "./Skill.css";

function Skill() {
  return (
    <>
        <section className='skills' id='skills'>
            <h2 className="heading">My <span>Skills</span></h2>

            <div className="skills-row">
                <div className="skills-column">
                    <div className="title">Coding Skills</div>

                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>HTML <span>90%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3>CSS <span>80%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3>Javascript <span>50%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3>React <span>80%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="skills-column">
                    <div className="title">Professional Skills</div>

                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>Web Design <span>90%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3>Web development <span>80%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>

                            <div className="progress">
                                <h3>React Development <span>50%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                        </div>
                    </div> 
                </div> 

            </div>
        </section>

    </>
  )
}

export default Skill