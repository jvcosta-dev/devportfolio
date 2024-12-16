import { useTranslations } from "next-intl";
import Page from "../../../components/ui/Page";
import { projects } from "../../../data/projects";
import ProjectCard from "../../../components/projects/ProjectCard";

export default function Work() {
  const t = useTranslations("HomePage");
  return (
    <Page>
      <h1 className="text-xl text-center w-full">{t("h1")}</h1>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </Page>
  );
}
