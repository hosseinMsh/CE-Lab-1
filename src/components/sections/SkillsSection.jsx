import SectionHeading from '../SectionHeading';

export default function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Core Skills"
          description="A compact stack for building polished static web experiences."
        />
        <ul className="skill-list" aria-label="Technical skills">
          <li>React</li>
          <li>JavaScript</li>
          <li>Vite</li>
          <li>Semantic HTML</li>
          <li>Modern CSS</li>
          <li>Git Workflow</li>
        </ul>
      </div>
    </section>
  );
}
