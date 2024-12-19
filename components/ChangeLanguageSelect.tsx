"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FunctionComponent, useState } from "react";

interface ChangeLanguageSelectProps {}

const ChangeLanguageSelect: FunctionComponent<
  ChangeLanguageSelectProps
> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();

  const options = [
    { label: "🇺🇸 English", value: "en" },
    { label: "🇧🇷 Português", value: "pt" },
  ];

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${e.target.value}/${path}`);
  };

  return (
    <select
      className="w-max outline-none aselect-none p-2 bg-background hover:bg-slate-200 rounded-lg"
      onChange={handleLanguageChange}
      value={locale}
      aria-label="content language selector"
    >
      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default ChangeLanguageSelect;
