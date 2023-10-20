import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gbcqmt4",
        "template_7aaw4y5",
        form.current,
        "NwyanfhHRDXP1JqEP"
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
    <div id="contactme">
      <h1 className="contactTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form to contact me
      </span>
      <form className="contactForm" ref={form}>
        <input
          type="text"
          className="Name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="Enter your message"
          className="msg"
        ></textarea>
        <button
          className="submit"
          type="submit"
          value="Send"
          onClick={sendEmail}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
