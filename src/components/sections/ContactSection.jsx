import SectionHeading from '../SectionHeading';

export default function ContactSection() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Work Together"
          description="If you need a polished frontend or want to talk through a project idea, reach out."
        />
        <div className="contact-card">
          <a href="mailto:student@example.com">student@example.com</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
