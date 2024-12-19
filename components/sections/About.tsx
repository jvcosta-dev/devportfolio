import Skills from "../Skills";
import Section from "../ui/Section";

export default function AboutSection() {
  return (
    <Section id="About">
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
    </Section>
  );
}
