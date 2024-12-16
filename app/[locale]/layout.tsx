import { Roboto } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "../../i18n/routing";

import "../globals.css";
import Navbar from "../../components/ui/Navbar";
import NotFound from "../not-found";
import Footer from "../../components/ui/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    return <NotFound />;
  }
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
