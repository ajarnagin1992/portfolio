import { LatestProjects } from "components/LatestProjects";
import { HeroSection } from "components/Hero";
import { Meta } from "components/Meta";
import { PageMargins } from "layout/layout";
import SkillSection from "components/SkillSection";
import ContactSection from "components/ContactSection";

export default function Home() {
  return (
    <div>
      <Meta />
      <HeroSection />
      <PageMargins>
        <LatestProjects />
        <SkillSection />
        <ContactSection />
      </PageMargins>
    </div>
  );
}
