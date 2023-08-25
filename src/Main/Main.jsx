import React from "react";
import img1 from "./photo.png";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import "./Style.css";

function Main() {


  return (
    <>
      <div className="homeall">
      <section className="home" id="home">
          <div className="home-content">
            <h1>
              Hi, Iam <span>Nadil Muhammed c p</span>
            </h1>
            <div className="text-animate">
              <h3>Full Stack Developer</h3>
            </div>
            <p>
            I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. My very passion is web devepment.
            </p>

            <div className="btn-box">
              <a href="#about" class="btn">
                Hire me
              </a>
              <a href="#contact" class="btn">
                Lets talk
              </a>
            </div>
            <div className="home-icons">
            <a href="https://github.com/nadilmuhammed">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nadil-muhammed-c-p-40b366276/">
              <FaLinkedin />
            </a>
            <a href="https://www.hackerrank.com/nadilmuhammedcp">
              <FaHackerrank />
            </a>
          </div>
          </div>
        <div id="home-img">
          <img className="home-img" src={img1} alt="" />
        </div>
      </section>
      </div>
    </>
  );
}

export default Main;
