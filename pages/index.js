import { LatestProjects } from "components/LatestProjects/LatestProjects";
import { HeroSection } from "components/Hero/Hero";
import { Meta } from "components/Meta/Meta";
import { PageMargins } from "layout/layout";
import { GetRepos } from "lib/GetRepos";
import SkillSection from "components/SkillSection/SkillSection";
import ContactSection from "components/ContactSection/ContactSection";

export default function Home() {
  const { repodata, isLoading, isError } = GetRepos();
  return (
    <div>
      <Meta />
      <HeroSection />
      <PageMargins>
        <LatestProjects
          repodata={repodata}
          isLoading={isLoading}
          isError={isError}
        />
        <SkillSection />
        <ContactSection />
      </PageMargins>
    </div>
  );
}
