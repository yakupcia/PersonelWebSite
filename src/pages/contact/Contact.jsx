import React from 'react'
import { Helmet } from 'react-helmet'

import { IoMdMail } from "react-icons/io";

import { IoIosSend } from "react-icons/io";

// css
import '../contact/Contact.css'


function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact - Yakup KOK</title>
      </Helmet>
      <section className="contact">
        <h2>Get In <span>Touch</span> </h2>

        <div className='contact_container'>

            <div className='left_inner_container'>  
             <IoMdMail style={{fontSize: 30 }}  /> 
            <span className="info_title"> Mail Me:  </span>

            
            <h4 className="info_disc">yakupcia@gmail.com</h4>

            <div className='contact_message'>Any collaboration proposals, project suggestions, or questions can be submitted using the contact form on the right, or you can reach out to me directly via email.</div>

            </div>

          <form className='contact_form'>
          <div className='form_input-group'>
            
            <div className='contact_subject_mail_name'>

            <div className='form_input-div'>
              <input type="text" placeholder='Your Name' className='form_kontrol'/>
            </div>

            <div className='form_input-div'>
              <input type="email" placeholder='Your Email' className='form_kontrol'/>
            </div>

            </div>

            <div className='form_input-div'>
             <textarea name="" id="" cols="55" rows="10" placeholder='Your Message' className='textarea'></textarea>
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