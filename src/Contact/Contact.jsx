import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./contact.css"

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tintl2d', 'template_9o7xbhv', form.current, 'zD-w9PTn6fSxXckqn')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email send successfull   !")
          }, (error) => {
              console.log(error.text);
          });
      };
  



  return (
    <>
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>

            <form ref={form} onSubmit={sendEmail} action='#'>
                <div className='input-box'>
                    <div className="input-field">
                        <input name='fullname' id='fullname' type='text' placeholder='Full Name' required/>
                        <span className='focus'></span>
                    </div>
                    <div className="input-field">
                        <input name='email' id='email' type='email' placeholder='Email Address' required/>
                        <span className='focus'></span>
                    </div>
                </div>
                    
                <div className='input-box'>
                    <div className="input-field">
                        <input name='phonenumber' id='mobileNumber' type='number' placeholder='Mobile Number' required/>
                        <span className='focus'></span>
                    </div>
                    <div className="input-field">
                        <input name='e-subject' id='emailSubject' type='text' placeholder='Email Subject' required/>
                        <span className='focus'></span>
                    </div>
                </div>

                <div className="textarea-field">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
                    <span className='focus'></span>
                </div>

                <div className="btn-box btns" id='call'>
                    <button type='submit' className='btn' id='submit'>Submit</button>
                </div>

            </form>
        </section>
    </>
  )
}

export default Contact