import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w1u7895",
        "template_q23fbmo",
        form.current,
        "xpjrAweSJQXrnreE-"
      )
      .then(
        (result) => {
          toast.success('Zpráva byla odeslána', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        },
        (error) => {
          toast.error('Zpráva se neodeslala', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="section-light contact" id="contact">
        <div className="container">
          <div
            className="columns is-multiline"
            data-aos="fade-in-up"
            data-aos-easing="linear"
          >
            <div className="column is-12 about-me">
              <h1 className="title has-text-centered section-title">
                Kontaktujte nás
              </h1>
            </div>

            <div className="column is-8 is-offset-2">
              <form ref={form} onSubmit={sendEmail}>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="email"
                      placeholder="email"
                      name="user_email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope" />
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Zpráva</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="zpráva"
                      name="message"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control ">
                    <button
                      className="button submit-button"
                      type="submit"
                      value="Send"
                    >
                      poslat&nbsp;&nbsp;
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
