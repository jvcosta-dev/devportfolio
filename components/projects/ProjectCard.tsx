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
    <Link
      href={`/work/${project.href}`}
      className="w-full flex flex-col-reverse md:flex-row md:items-center md:gap-6 md:pl-12 rounded-xl"
      style={{ background: project.bgColor, color: project.color || "inherit" }}
    >
      <div className="flex flex-col gap-2 p-4 md:p-0">
        <div>
          {project.tags.map((tag, i) => (
            <span key={i} className="text-inherit">
              {t(`tags.${tag}`)} {i !== project.tags.length - 1 && "/ "}
            </span>
          ))}
        </div>
        <h2 className="w-72 text-3xl font-black">
          {t(`projects.${project.name}.name`)}
        </h2>

        <p>{t(`projects.${project.name}.description`)}</p>
      </div>
      <Image
        alt={`${project.name}.name img`}
        src={project.imageUrl}
        width={1280}
        height={768}
        priority
        className="bg-slate-400 w-full h-64 md:h-80 xl:h-96 aspect-auto rounded-xl object-cover"
      />
    </Link>
  );
};

export default ProjectCard;
