import React from 'react'
import {BiUpArrowAlt} from "react-icons/bi"
import "./footer.css"

function Footer() {
  return (
    <>

        <footer className='footer'>
            <div className="footer-text">
                <p>By Nadil Muhammed cp| All Rights Reserved.</p>
            </div>

            <div className="footer-iconTop">
                <a href='#'><i><BiUpArrowAlt/></i></a>
            </div>
        </footer>

    </>
  )
}

export default Footer