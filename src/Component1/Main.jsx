import React from "react";
import img1 from "./photo.png";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import Navbarall from "./Navbarall";
import "./Style.css";

function Main() {

    // toggle icon navbar
    // let menuIcon = document.querySelector('#menu-icon')
    // let navbar = document.querySelector('.navbar');
    // console.log(menuIcon,'menuicons');
    // menuIcon.onclick = () => {
    //     menuIcon.classList.toggle('bx-x');
    //     menuIcon.classList.toggle('active');
    // }

    
//   scroll section
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  // // scroll section
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      // if (top >= offset && top < offset + height) {
      //   navLinks.forEach((links) => {
      //     links.classList.remove('active');
      //     document
      //       .querySelector("header nav a[href*=" + id + "]")
      //       .classList.add('active');
      //   });
      // }
    });

    let header = document.querySelector("header");

    // header.classList.toggle("sticky", window.scrollY > 100);
  };

  return (
    <>
      <Navbarall />
      <section className="home" id="home">
          <div className="home-content">
            <h1>
              Hi, Iam <span>Nadil Muhammed c p</span>
            </h1>
            <div className="text-animate">
              <h3>Full Stack Developer</h3>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quia
              non animi molestias sint minima officiis aperiam numquam dolores
              corrupti, distinctio harum eveniet nesciunt optio. Doloremque
              molestiae sint modi sequi.
            </p>

            <div className="btn-box">
              <a href="#" class="btn">
                Hire me
              </a>
              <a href="#" class="btn">
                Lets talk
              </a>
            </div>
            <div className="home-icons">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaHackerrank />
            </a>
          </div>
          </div>
        <div id="home-img">
          <img className="home-img" src={img1} alt="" />
        </div>
      </section>
    </>
  );
}

export default Main;
