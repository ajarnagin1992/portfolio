import { LatestProjects } from "components/LatestProjects";
import { HeroSection } from "components/Hero";
import { Meta } from "components/Meta";
import { PageMargins } from "layout/layout";
import { GetRepos } from "lib/GetRepos";
import SkillSection from "components/SkillSection";
import ContactSection from "components/ContactSection";

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
