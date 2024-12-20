"use client";

import { Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import { FunctionComponent, useState } from "react";

interface CopyTextProps {
  text: string;
}

const CopyText: FunctionComponent<CopyTextProps> = ({ text }) => {
  const t = useTranslations("misc");
  const [copied, setCopied] = useState(false);
  return (
    <span
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }}
      className={`${
        copied && "text-primary"
      } w-max group cursor-pointer flex items-center gap-2 hover:text-primary rounded-lg transition-all duration-150`}
    >
      {copied ? (
        <>
          {t("copied")} <Check />
        </>
      ) : (
        <>
          {text}
          <Copy className="md:group-hover:opacity-100 md:opacity-0 transition-opacity" />
        </>
      )}
    </span>
  );
};

export default CopyText;
