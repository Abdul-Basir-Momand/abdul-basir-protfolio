export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
