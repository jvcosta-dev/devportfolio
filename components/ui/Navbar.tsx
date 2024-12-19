"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../../i18n/routing";
import { FunctionComponent, useState } from "react";
import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";
import ContactButton from "./ContactButton";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const t = useTranslations("NavbarLinks");

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 w-full px-6 pt-4 pb-2 flex flex-row gap-4 sm:items-center justify-between bg-background bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <Link href={`/#Hi!`}>
          <Image
            priority
            src="/logo.png"
            alt="jm (joão matos) logo"
            className=""
            width={54}
            height={46}
          />
        </Link>
        <nav className="hidden sm:flex gap-4 items-center">
          <NavLink href={`Work`} label={t("work")} />
          <NavLink href={`About`} label={t("about")} />
          <ContactButton />
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block sm:hidden text-primary"
        >
          {isOpen ? <X size={48} /> : <Menu size={48} />}
        </button>
      </header>
      {isOpen && (
        <nav className="sm:hidden w-full fixed top-20 flex flex-col p-6 gap-2 bg-background">
          <NavLink href={`Work`} label={t("work")} />
          <NavLink href={`About`} label={t("about")} />
          <a
            href="mailto:victor.matos.costa.dev@gmail.com"
            className="font-black text-xl"
          >
            <button>{t("contact-call")}</button>
          </a>
        </nav>
      )}
    </>
  );
};

export default Navbar;

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: FunctionComponent<NavLinkProps> = ({ href, label }) => {
  return (
    <Link
      href={`/#${href}`}
      className="text-xl text-foreground/60 hover:text-foreground transition-colors duration-150"
    >
      {label}
    </Link>
  );
};
