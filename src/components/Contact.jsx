export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <p className="eyebrow">Contact</p>
        <h2 className="contact-title">Let's build something that has to work in production.</h2>
        <p className="contact-sub">
          Open to senior and staff-level frontend, full-stack, and platform roles.
        </p>

        <div className="contact-actions">
          <a href="mailto:cliffharvey06@gmail.com" className="btn btn-primary">
            cliffharvey06@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/clifford-harvey/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn
          </a>
        </div>

        <p className="contact-location">Henderson, NV</p>
      </div>
    </section>
  );
}
