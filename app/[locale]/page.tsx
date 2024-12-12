// app/page.tsx
import { useLocale, useTranslations } from "next-intl";
import { redirect } from "next/navigation";

export default function Page() {
  const locale = useLocale();
  redirect(`${locale}/work`);
  return null;
}
