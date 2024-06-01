export default function ContactUs() {
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
              <form
                action="https://formspree.io/email@example.com"
                method="POST"
              >
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="email"
                      placeholder="email"
                      name="Email"
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
                      name="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control ">
                    <button className="button submit-button">
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
    </>
  );
}
