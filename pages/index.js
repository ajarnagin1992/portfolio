import LatestCommits from "components/LatestCommits";
import { HeroSection } from "../components/Hero";
import { Meta } from "../components/Meta";

export default function Home() {
  return (
    <div>
      <Meta />
      <HeroSection />
      <LatestCommits />
    </div>
  );
}
