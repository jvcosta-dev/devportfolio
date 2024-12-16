"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../../i18n/routing";
import { FunctionComponent } from "react";
import { usePathname } from "next/navigation";

import ChangeLanguageSelect from "../ChangeLanguageSelect";
import { Mail } from "lucide-react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const t = useTranslations("NavbarLinks");

  return (
    <header className="sticky top-0 w-full flex flex-row gap-4 sm:items-center justify-between px-6 xl:px-24 pt-4 pb-2 bg-background">
      <Link href={`/`} className="hidden sm:block lg:w-full">
        <Image
          priority
          src="/logo.png"
          alt="jm (joão matos) logo"
          className=""
          width={54}
          height={46}
        />
      </Link>
      <nav className="flex gap-2">
        <NavLink href={`work`} label={t("work")} />
        <NavLink href={`about`} label={t("about")} />
      </nav>
      <div className="lg:w-full lg:justify-end flex flex-col lg:flex-row items-center gap-2">
        <a
          href="mailto:victor.matos.costa.dev@gmail.com"
          className="p-2 font-black text-background bg-primary rounded-lg"
        >
          <button className="flex items-center gap-2">
            <Mail /> {t("contact-call")}
          </button>
        </a>
        <ChangeLanguageSelect />
      </div>
    </header>
  );
};

export default Navbar;

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: FunctionComponent<NavLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname.split("/")[2] === href;

  return (
    <Link
      href={`/${href}`}
      className={`text-xl font-black ${
        isActive ? "text-foreground" : "text-foreground/60"
      }`}
    >
      {label}
    </Link>
  );
};
