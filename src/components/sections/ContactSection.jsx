import SectionHeading from '../SectionHeading';

export default function ContactSection() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let’s Work Together"
          description="If you need a polished frontend or want to talk through a project idea, reach out."
        />
        <div className="contact-layout">
          <form className="contact-card contact-card--form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell me about your project" />
            </label>
            <button type="submit" className="button button--primary">
              Send Message
            </button>
          </form>

          <div className="contact-card contact-card--links">
            <a href="mailto:student@example.com">student@example.com</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
