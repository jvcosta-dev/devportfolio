import { useTranslations } from "next-intl";
import { FunctionComponent } from "react";

interface ContactButtonProps {}

const ContactButton: FunctionComponent<ContactButtonProps> = () => {
  const t = useTranslations("NavbarLinks");
  return (
    <a
      href="mailto:victor.matos.costa.dev@gmail.com"
      className="p-2 font-black text-background bg-primary rounded-lg w-max"
    >
      <button>{t("contact-call")}</button>
    </a>
  );
};

export default ContactButton;
