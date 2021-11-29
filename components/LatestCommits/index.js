import React from "react";
import { BiExit } from "react-icons/bi";
import { GetRepos } from "../../lib/GetRepos";
import { HoverLink } from "components/Generic";
import { RepoCard } from "./RepoCard";
import { StyledHeader } from "components/Generic";

function LatestCommits() {
  return (
    <div>
      <SectionHeader></SectionHeader>
      <RepoGrid></RepoGrid>
    </div>
  );
}

function SectionHeader(props) {
  return (
    <div className="flex flex-row items-center justify-between">
      <StyledHeader>Latest Projects</StyledHeader>
      <HoverLink
        href="https://github.com/ajarnagin1992?tab=repositories"
        icon={<BiExit />}
        label="View all"
      ></HoverLink>
    </div>
  );
}

function RepoGrid(props) {
  const { repodata, isLoading, isError } = GetRepos();
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <SkeletonGrid />;
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 ">
      {repodata.map((repo) => {
        return (
          <RepoCard
            key={repo.id}
            name={repo.name}
            desc={repo.description}
            url={repo.html_url}
            topics={repo.topics}
          ></RepoCard>
        );
      })}
    </div>
  );
}

function SkeletonGrid(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
      <SkeletonCard></SkeletonCard>
    </div>
  );
}

function SkeletonCard(props) {
  return (
    <div className="flex flex-col p-3 bg-background  rounded space-y-1 animate-pulse">
      <div className="flex flex-row justify-between items-baseline">
        <h1 className="rounded bg-tertiary-normal h-6 w-3/5"></h1>
        <div className="rounded bg-tertiary-normal w-1/4 h-6"></div>
      </div>
      <p className="rounded bg-tertiary-normal h-4 w-full"></p>
      <p className="rounded bg-tertiary-normal h-4 w-full"></p>
    </div>
  );
}

export default LatestCommits;
