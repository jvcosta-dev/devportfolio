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
      className="w-full flex flex-col-reverse lg:flex-row lg:items-center lg:gap-6 lg:pl-12 rounded-xl"
      style={{ background: project.bgColor, color: project.color || "inherit" }}
    >
      <div className="w-full flex flex-col gap-2 p-4 lg:p-0">
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
        <button className="w-full sm:w-max px-4 py-2 font-black bg-primary rounded-lg">
          {t("projects.link")}
        </button>
      </div>
      <Image
        alt={`${project.name}.name img`}
        src={project.imageUrl}
        width={1280}
        height={768}
        priority
        className="w-full h-80 md:h-96 xl:h-[432px] aspect-auto rounded-xl object-contain lg:object-cover"
      />
    </Link>
  );
};

export default ProjectCard;
