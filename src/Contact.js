import "./Contact.css";
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2>Kontaktai</h2>

        <div className="contact-info">
          <div>
            <p className="contact-label">El. paštas</p>
            <a
              href="mailto:silvijaku@hotmail.lt"
              className="contact-link"
            >
              silvijaku@hotmail.lt
            </a>
          </div>

          <div>
            <p className="contact-label">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/silvija-kulvietytė-5521b9281"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Silvija Kulvietytė
            </a>
          </div>
          <div>
            <p className="contact-label">GitHub</p>
            <a
              href="https://github.com/SilvijaKu"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              Silvija Kulvietytė
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;