import { FunctionComponent } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../../i18n/routing";
import { LinkIcon } from "lucide-react";

import { Project } from "../../interfaces";

interface Props {
  project: Project;
}

const ProjectCard: FunctionComponent<Props> = ({ project }) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-2">
      <Image
        alt={`${t(project.nameKey)} img`}
        src={project.imageUrl}
        width={384}
        height={384}
        className="object-cover w-auto h-auto"
      />
      <div>
        {project.tags.map((tag, i) => (
          <span key={i} className="text-foreground/60">
            {t(tag)} {i !== project.tags.length - 1 && "/ "}
          </span>
        ))}
      </div>
      <h2 className="text-2xl font-black">{t(project.nameKey)}</h2>
      <Link
        href={`/work/${project.href}`}
        className="w-max flex items-center gap-2 text-primary"
      >
        <u className="text-xl">{t("projects.link")}</u>
        <LinkIcon />
      </Link>
    </div>
  );
};

export default ProjectCard;
