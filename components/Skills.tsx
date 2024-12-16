import { useTranslations } from "next-intl";
import { FunctionComponent } from "react";

interface SkillsProps {
  title: string;
  itens: string[];
  noTranslateSkills?: boolean;
}

const Skills: FunctionComponent<SkillsProps> = ({
  title,
  itens,
  noTranslateSkills,
}) => {
  const t = useTranslations("skills");
  return (
    <div className="flex flex-col gap-2">
      <b className="text-lg">{t(title)}</b>
      <div className="flex flex-col gap-1">
        {itens.map((item, i) => (
          <p key={i}>{noTranslateSkills ? item : t(item)}</p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
