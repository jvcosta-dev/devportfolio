import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import Section from "../ui/Section";
export default function WorkSection() {
  return (
    <Section title="projects" id="Work">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Section>
  );
}
