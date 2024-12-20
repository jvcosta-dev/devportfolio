import Image from "next/image";
import Skills from "../Skills";
import Section from "../ui/Section";
import Title from "../ui/Title";
import ContactButton from "../ui/ContactButton";
import { useTranslations } from "next-intl";
import { Copy } from "lucide-react";
import CopyText from "../ui/CopyText";

export default function SkillsSection() {
  const t = useTranslations();
  return (
    <Section id="Skills" title="skills">
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
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
          itens={["Figma", "CSS + HTML", "JavaScript + Typescript", "Reactjs"]}
          noTranslateSkills
        />
        <Skills
          title="educationip"
          itens={["uxdesign", "cybersecurity", "softwareeng"]}
        />
        <Skills title="education" itens={["computert"]} />
      </div>
    </Section>
  );
}
