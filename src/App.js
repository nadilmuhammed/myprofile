import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Style.css";
import Main from "./Main/Main";
import About from "./About/About";
import Education from "./Education/Education";
import Skill from "./Skills/Skill";
import Contact from "./Contact/Contact";
import Footer from "./footer/Footer";
import Navbarall from "./Component1/Navbarall";

function App() {
  return (
    <>
        <Navbarall/>
        <Main />
        <About/>
        <Education/>
        <Skill/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
