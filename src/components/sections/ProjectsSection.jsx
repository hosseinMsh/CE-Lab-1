import ProjectCard from '../ProjectCard';
import SectionHeading from '../SectionHeading';

const PROJECTS = [
  {
    title: 'Portfolio Website',
    description: 'A responsive static portfolio with a dark mode toggle and GitHub Pages deployment.',
    tags: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'Task Tracker UI',
    description: 'A clean task-management interface focused on fast scanning and easy input.',
    tags: ['JavaScript', 'UX', 'Responsive'],
  },
  {
    title: 'Course Dashboard',
    description: 'A dashboard concept for summarizing assignments, progress, and weekly deadlines.',
    tags: ['Layout', 'Components', 'Accessibility'],
  },
];

export default function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="A small set of portfolio pieces that show different layout and interaction patterns."
        />
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
