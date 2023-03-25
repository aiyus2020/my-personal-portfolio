import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm(
        "service_xrvkzdi",
        "template_sowvc4i",
        form.current,
        "MiPHKlsA96i5m8jo4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>aiyusboss@gmail.com</h5>
            <a href="mailto:aiyus@gmail.com" target="_blank">
              Send Me a Message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Messager</h4>
            <h5>aiyusTech</h5>
            <a href="https://m.me/aiyus.edia" target="_blank">
              Send Me a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>aiyusboss@gmail.com</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2348137985484"
              target="_blank"
            >
              Send Me a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your message"
            rows="7"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
