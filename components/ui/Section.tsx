import { useTranslations } from "next-intl";
import { FunctionComponent, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title?: string;
  id?: string;
}

const Section: FunctionComponent<SectionProps> = ({ children, title, id }) => {
  const t = useTranslations("sectionTitles");
  return (
    <section className="flex flex-col gap-6 md:gap-8 scroll-mt-24" id={id}>
      {title && <h1 className="text-3xl">{t(title)}</h1>}
      {children}
    </section>
  );
};

export default Section;
