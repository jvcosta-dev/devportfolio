import { FunctionComponent } from "react";
import { Link } from "../../i18n/routing";
import Image from "next/image";
import { Github, Mail, Phone } from "lucide-react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="w-full flex flex-col gap-4 justify-between px-6 xl:px-24 pt-4 pb-2 bg-background">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <a
            href="https://github.com/jvcosta-dev"
            target="_blank"
            className="p-2 rounded-full bg-slate-200 hover:bg-black hover:text-background"
            aria-label="jvcosta-dev github"
          >
            <Github />
          </a>
          <a
            href="mailto:victor.matos.costa.dev@gmail.com"
            className="p-2 rounded-full bg-slate-200 hover:bg-primary hover:text-background"
            aria-label="mail to victor.matos.costa.dev@gmail.com"
          >
            <Mail />
          </a>
          <a
            href="https://wa.me/5511984237631"
            target="_blank"
            className="p-2 rounded-full bg-slate-200 hover:bg-green-600 hover:text-background"
            aria-label="whatsapp"
          >
            <Phone />
          </a>
        </div>
        <Link href={`/`}>
          <Image
            priority
            src="/logo.png"
            alt="jm (joão matos) logo"
            className=""
            width={54}
            height={46}
          />
        </Link>
      </div>
      <div className="w-full h-[2px] bg-foreground/60" />
      <p>&copy; 2024 João Matos.</p>
    </footer>
  );
};

export default Footer;
