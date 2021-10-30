import React, { useState } from "react";
import "./contactForm.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_KkjPy1fq6wpuZYBELSAiz");

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_og30hof",
        "email_temp_id",
        "#requestform",
        "user_KkjPy1fq6wpuZYBELSAiz"
      )
      .then(
        function (response) {
          setName();
          setEmail();
          setMessage("");
          alert(
            "Thank you for contacting me. I will get back to you soon. Have a good day :)"
          );
          console.log("send");
        },
        function (error) {
          alert("Sorry! Could send an email!");
          console.log(error);
        }
      );
    e.target.reset();
  };

  return (
    <>
      {/* <FormStyle> */}

      <form id="requestform" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Your Name
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Your Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Your Message
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input"
              required
            ></textarea>
          </label>
        </div>
        <button type="submit" className="form-button">
          Send
        </button>
      </form>
      {/* </FormStyle> */}
    </>
  );
}
