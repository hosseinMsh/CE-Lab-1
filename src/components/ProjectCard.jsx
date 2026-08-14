export default function ProjectCard({ title, description, tags = [], linkLabel = 'View details' }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tags.length > 0 ? (
        <ul className="project-card__tags" aria-label={`${title} technologies`}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      ) : null}
      <a className="project-card__link" href="#contact">
        {linkLabel}
      </a>
    </article>
  );
}
