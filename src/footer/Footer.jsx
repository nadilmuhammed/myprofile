import React from 'react'
import {BiUpArrowAlt} from "react-icons/bi"
import "./footer.css"
import { FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <>

        <footer className='footer'>
            <div className="footer-text">
                <p>By Nadil Muhammed cp| All Rights Reserved.</p>
            </div>

            <div className="footer-iconTop">
                <div className="home-icons" id='footer-icon'>
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
                <div className='up-home'>
                  <a href='#'><i><BiUpArrowAlt/></i></a>
                </div>
            </div>
        </footer>

    </>
  )
}

export default Footer