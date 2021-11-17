import LatestCommits from "components/LatestCommits";
import { HeroSection } from "components/Hero";
import { Meta } from "components/Meta";
import { PageMargins } from "layout/Layout";

export default function Home() {
  return (
    <div>
      <Meta />
      <HeroSection />
      <PageMargins>
        <LatestCommits />
      </PageMargins>
    </div>
  );
}
