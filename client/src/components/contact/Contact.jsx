import React, { useState, useRef, useContext } from "react";
import emailjs from "emailjs-com";

import { ThemeContext } from "./../../shared/theme-context";
import Phone from "./../../img/phone.png";
import Email from "./../../img/email.png";
import Address from "./../../img/address.png";
import classes from "./Contact.module.css";

function Contact() {
  const [done, setDone] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const formRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    setDone(true);
    emailjs
      .sendForm(
        "service_li8mnz6",
        "template_mj6mm3l",
        formRef.current,
        "user_9fXuyR0TlpPPYMSzLTRjB"
      )
      .then(
        (result) => {},
        (error) => {
          console.err(error.text);
        }
      );
  }

  return (
    <div className={classes.c}>
      <div className={classes["c-bg"]}></div>
      <div className={classes["c-wrapper"]}>
        <div className={classes["c-left"]}>
          <h1 className={classes["c-title"]}>let's discuss business NOW</h1>
          <address className={classes["c-info"]}>
            <div className={classes["c-info-item"]}>
              <img src={Phone} alt="phone" className={classes["c-icon"]} />
              <a href="tel:+201024134716">+20 1024134716</a>
            </div>
            <div className={classes["c-info-item"]}>
              <img src={Email} alt="email" className={classes["c-icon"]} />
              <a href="mailto:youssifhany75@gmail.com">
                youssifhany75@gmail.com
              </a>
            </div>
            <div className={classes["c-info-item"]}>
              <img src={Address} alt="ddress" className={classes["c-icon"]} />
              <address>ALexandria, Egypt </address>
              <b>🇪🇬</b>
            </div>
          </address>
        </div>
        <div className={classes["c-right"]}>
          <p className={classes["c-desc"]}>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form className={classes.form} ref={formRef} onSubmit={submitHandler}>
            <input
              className={themeCtx.darkMode && "dark-mode"}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              className={themeCtx.darkMode && "dark-mode"}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className={themeCtx.darkMode && "dark-mode"}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              className={themeCtx.darkMode && "dark-mode"}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button type="submit">Submit</button>
          </form>
          {done && <p>Thank You...</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
