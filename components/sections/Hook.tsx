import { useTranslations } from "next-intl";
import Section from "../ui/Section";
import Title from "../ui/Title";
import CopyText from "../ui/CopyText";
import ContactButton from "../ui/ContactButton";

export default function HookSection() {
  const t = useTranslations();
  return (
    <Section id="Contact" title="contact">
      <div className="flex flex-col gap-4">
        <Title>{t("about.alt-introduction")}</Title>
        <div className="flex flex-col md:flex-row md:items-center md:gap-2 text-lg">
          <p>{t("about.alt-description")}:</p>
          <CopyText text="victor.matos.costa.dev@gmail.com" />
        </div>
        <ContactButton />
      </div>
    </Section>
  );
}
