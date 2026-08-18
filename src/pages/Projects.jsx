import { projects } from "../assets/data/portfolio";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="My Projects"
          subtitle="Some projects I have worked on"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
