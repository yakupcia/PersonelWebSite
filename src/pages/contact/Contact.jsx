import React from 'react'
import { Helmet } from 'react-helmet'

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

import { IoIosSend } from "react-icons/io";


function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact - Yakup KOK</title>
      </Helmet>
      <section className="contact">
        <h2>Get In <span>Touch</span> </h2>

        <div className='contact_info'>
          <div>
            <EmailIcon />

          <span className="info_title">Mail Me</span>
          <span className="info_disc">yakupcia@gmail.com</span>
          </div>

          <div>
            <CallIcon />

          <span className="info_title">Call Me</span>
          <span className="info_disc">+90 555 024 39 10</span>
          </div>

          <form className='contact_form'>
          <div className='form_input-group'>
            <div className='form_input-div'>
              <input type="text" placeholder='Your Name' className='form_kontrol'/>
            </div>

            <div className='form_input-div'>
              <input type="email" placeholder='Your Email' className='form_kontrol'/>
            </div>

            <div className='form_input-div'>
              <input type="text" placeholder='Your Subject' className='form_kontrol'/>
            </div>

            <div className='form_input-div'>
             <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='form_input textarea'></textarea>
            </div>

            <button className='Button'> 
              Send Message 
              <span className='send_button_icon'>
              <IoIosSend />
              </span>
            </button>
          </div>
       </form>

       </div>
      </section>
    </div>
  )
}

export default Contact