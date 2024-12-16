import { useTranslations } from "next-intl";
import Page from "../../../components/ui/Page";
import Title from "../../../components/ui/Title";
import Skills from "../../../components/Skills";
import Image from "next/image";

export default function About() {
  const t = useTranslations();
  return (
    <Page>
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          src={"/pfp.png"}
          alt="João Matos"
          width={768}
          height={768}
          className="object-cover w-96 h-96 rounded-full"
          priority
        />
        <Title>João Matos</Title>
        <h2 className="text-xl">{t("HomePage.h1")}</h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        <Skills
          title="soft"
          itens={["team", "comm", "ps", "creativity", "sm", "we"]}
        />
        <Skills
          title="design"
          itens={["typography", "research", "uu", "branding"]}
        />
        <Skills
          title="technical"
          itens={[
            "Figma",
            "CSS + HTML",
            "JavaScript",
            "TypeScript",
            "Reactjs",
            "Nextjs",
          ]}
          noTranslateSkills
        />
        <Skills
          title="educationip"
          itens={["uxdesign", "cybersecurity", "softwareeng"]}
        />
        <Skills title="education" itens={["computert"]} />
      </div>
    </Page>
  );
}
