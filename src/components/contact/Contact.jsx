import React from "react";
import axios from "axios";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelegram, BsMessenger } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { sendMessageTelegram } from "../../services/telegram";
import { useState } from "react";
import Modal from "../modal/Modal";
const Contact = ({ userLocation }) => {
  console.log(userLocation);
  const [modalActive, setModalActive] = useState(false);
  const [name, setName] = useState("");
  const form = useRef();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    sendMessageTelegram(e);
    // emailjs
    //   .sendForm(
    //     "service_xk4wlsn",
    //     "template_tiqbpmq",
    //     form.current,
    //     "zVlKVNP2tP7ZpJWUN"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    setModalActive(!modalActive);
    e.target.reset();
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
            <h5>tatarynrm@gmail.com</h5>
            <a href="mailto:tatarynrm@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>romannoris0402</h5>
            <a href="https://m.me/romannoris0402">Send a message</a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@I_DONT_HAVE_A_PHONE_NUMBER</h5>
            <a href="https://t.me/I_Dont_Have_A_Phone_Number">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      {modalActive ? (
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
          name={name}
          userLocation={userLocation}
        />
      ) : null}
    </section>
  );
};

export default Contact;
