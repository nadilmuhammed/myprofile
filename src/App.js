import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Style.css";
import Main from "./Component1/Main";
import About from "./About/About";
import Education from "./Education/Education";
import Skill from "./Skills/Skill";
import Contact from "./Contact/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
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
