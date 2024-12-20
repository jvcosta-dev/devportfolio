import { FunctionComponent } from "react";
import Image from "next/image";
import ChangeLanguageSelect from "../ChangeLanguageSelect";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="w-full flex flex-col gap-4 justify-between px-6 pt-4 pb-2 bg-background">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <abbr title="Github">
            <a href="https://github.com/jvcosta-dev" target="_blank">
              <Image
                src={"/social-icons/github.webp"}
                alt="github icon"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </a>
          </abbr>
          <abbr title="Email">
            <a
              href="mailto:victor.matos.costa.dev@gmail.com"
              aria-label="mail to victor.matos.costa.dev@gmail.com"
            >
              <Image
                src={"/social-icons/gmail.png"}
                alt="gmail icon"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </a>
          </abbr>
          <abbr title="Whatsapp">
            <a
              href="https://wa.me/5511984237631"
              target="_blank"
              aria-label="whatsapp"
            >
              <Image
                src={"/social-icons/whatsapp.png"}
                alt="whatsapp icon"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </a>
          </abbr>
        </div>
        <ChangeLanguageSelect />
      </div>
      <div className="w-full h-[2px] bg-foreground/60" />
      <p>&copy; 2024 João Matos.</p>
    </footer>
  );
};

export default Footer;
