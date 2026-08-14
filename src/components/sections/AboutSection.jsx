import SectionHeading from '../SectionHeading';

export default function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="About Me"
          description="I am a student developer focused on building accessible and maintainable interfaces."
        />
        <div className="about-grid">
          <p>
            My work balances visual clarity, semantic HTML, and responsive interactions. I enjoy
            turning design ideas into performant frontends that are easy to understand and simple
            to extend.
          </p>
          <p>
            This portfolio project is intentionally small, but it demonstrates the core workflow
            expected in a university Git lab: planning, branching, reviews, conflict resolution,
            automation, and deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
