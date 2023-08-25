import React from 'react'
import { FaCalendar } from "react-icons/fa"
import "./education.css"
import img2 from "./calc.png"
import meals from "./meals.jpg"
import mobile from "./redux-mobile.png"

function Education() {
  return (
    <>

        <section className='education' id='education'>
            <h2 className="heading">My <spna>Journey</spna></h2>

            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">Education</h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i><FaCalendar/></i> 2020 - 2023 </div>
                                <h3>Bachelor of Computer Science -Calicut University</h3>
                                <p>JDT islam Arts and science College<br/> Vellimadukunnu<br/>calicut</p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i><FaCalendar/></i> 2019 - 2020 </div>
                                <h3>+2 (Computer science) - Board Higher Secondary</h3>
                                <p>GVHSS Atholi<br/>Atholi<br/>Calicut</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="education-column">
                    <h3 className="title">Projects</h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                {/* <div className="year"><i><FaCalendar/></i> 2017 - 2018 </div> */}
                                <h3>Calculator- Html,css, Javascript</h3>
                                <img src={img2} alt='' style={{width:"50%"}} />
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                {/* <div className="year"><i><FaCalendar/></i> 2018 - 2019 </div> */}
                                <h3>Meals Sorting (API Creation) - React js</h3>
                                <img src={meals} alt='' style={{width:"40%"}}></img>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                {/* <div className="year"><i><FaCalendar/></i> 2019 - 2020 </div> */}
                                <h3>Mobile shopping(Adding to cart) - React Redux</h3>
                                <img src={mobile} alt='' style={{width:"50%"}}></img>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>


    </>
  )
}

export default Education