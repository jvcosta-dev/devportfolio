import Image from "next/image";
import Section from "../ui/Section";
import Title from "../ui/Title";
import Skills from "../Skills";
import { useTranslations } from "next-intl";
import AvailabilityStatus from "../ui/AvailabilityStatus";
import ContactButton from "../ui/ContactButton";

export default function HiSection() {
  const t = useTranslations();
  return (
    <Section id="Hi!">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6">
        <Image
          src={"/pfp.png"}
          alt="João Matos"
          width={768}
          height={768}
          className="object-cover w-80 h-80 rounded-full"
          priority
        />
        <div className="flex flex-col gap-4">
          <AvailabilityStatus available />
          <Title>{t("about.introduction")}</Title>
          <p className="text-xl">{t("about.description")}</p>
          <ContactButton />
        </div>
      </div>
    </Section>
  );
}
