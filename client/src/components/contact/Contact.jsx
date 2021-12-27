import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import Phone from "./../../img/phone.png";
import Email from "./../../img/email.png";
import Address from "./../../img/address.png";
import classes from "./Contact.module.css";

function Contact() {
  const [done, setDone] = useState(false);
  const formRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_li8mnz6",
        "template_mj6mm3l",
        formRef.current,
        "user_9fXuyR0TlpPPYMSzLTRjB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
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
          <h1 className={classes["c-title"]}>let's discuss your project</h1>
          <address className={classes["c-info"]}>
            <div className={classes["c-info-item"]}>
              <img src={Phone} alt="phone" className={classes["c-icon"]} />
              +20 1024134716
            </div>
            <div className={classes["c-info-item"]}>
              <img src={Email} alt="email" className={classes["c-icon"]} />
              youssifhany75@gmail.com
            </div>
            <div className={classes["c-info-item"]}>
              <img src={Address} alt="ddress" className={classes["c-icon"]} />
              ALexandria,Egypt
            </div>
          </address>
        </div>
        <div className={classes["c-right"]}>
          <p className={classes["c-desc"]}>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form className={classes.form} ref={formRef} onSubmit={submitHandler}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button type="submit">Submit</button>
          </form>
          {done && "Thank You..."}
        </div>
      </div>
    </div>
  );
}

export default Contact;
