import Page from "../../components/ui/Page";
import WorkSection from "../../components/sections/Work";
import HiSection from "../../components/sections/Hi";
import SkillsSection from "../../components/sections/Skills";
import HookSection from "../../components/sections/Hook";

export default function HomePage() {
  return (
    <Page>
      <HiSection />
      <WorkSection />
      <SkillsSection />
      <HookSection />
    </Page>
  );
}
