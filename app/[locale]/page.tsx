import Page from "../../components/ui/Page";
import AboutSection from "../../components/sections/About";
import WorkSection from "../../components/sections/Work";
import HiSection from "../../components/sections/Hi";

export default function HomePage() {
  return (
    <Page>
      <HiSection />
      <WorkSection />
      <AboutSection />
    </Page>
  );
}
