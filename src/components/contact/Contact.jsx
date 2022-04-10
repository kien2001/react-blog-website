import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { SiZalo } from 'react-icons/si'
import './contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hkprnia', 'template_2f0bpit', form.current, 'pCwMU0SvYuFdp6eFM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kienlevan2001@gmail.com</h5>
            <a href="mailto:kienlevan2001@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>kienlevan</h5>
            <a href="https://m.me/kien.levan.3557" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <SiZalo className="contact__option-icon" />
            <h4>Zalo</h4>
            <h5>+84936024031</h5>
            <a href="https://zalo.me/84936024031" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact