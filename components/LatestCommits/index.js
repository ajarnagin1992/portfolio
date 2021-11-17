import React from "react";
import useSWR from "swr";
import { FaLink } from "react-icons/fa";

const fetcher = (url) => fetch(url).then((res) => res.json());

function LatestCommits() {
  return (
    <div>
      <Profile />
    </div>
  );
}

function Profile() {
  const { data, error } = useSWR(
    "https://api.github.com/users/ajarnagin1992/repos?sort=pushed&per_page=6",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) {
    return (
      <div>
        <h1 className="text-5xl p-10">Latest Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <RepoCard loading="true"></RepoCard>
          <RepoCard loading="true"></RepoCard>
          <RepoCard loading="true"></RepoCard>
          <RepoCard loading="true"></RepoCard>
          <RepoCard loading="true"></RepoCard>
          <RepoCard loading="true"></RepoCard>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-5xl p-10">Latest Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {data.map((repo) => {
          return (
            <RepoCard
              key={repo.id}
              name={repo.name}
              desc={repo.description}
              url={repo.html_url}
            ></RepoCard>
          );
        })}
      </div>
    </div>
  );
}

function RepoCard(props) {
  if (props.loading)
    return (
      <div className="flex flex-col p-3 border border-black bg-gray-100 m-1 rounded space-y-1 animate-pulse">
        <div className="flex flex-row justify-between items-baseline">
          <h1 className="rounded bg-blue-400 h-6 w-3/5"></h1>
          <div className="rounded bg-blue-400 w-1/4 h-6"></div>
        </div>
        <p className="rounded bg-blue-400 h-4 w-full"></p>
        <p className="rounded bg-blue-400 h-4 w-full"></p>
      </div>
    );
  return (
    <div className="flex flex-col p-3 border border-black bg-gray-100 m-1 rounded space-y-1">
      <div className="flex flex-row justify-between items-baseline">
        <h1 className="text-lg font-semibold underline">{props.name}</h1>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center space-x-1 text-xs p-2 rounded text-white bg-gradient-to-bl from-blue-400 to-blue-600"
        >
          <FaLink />
          <div>{" Repository"}</div>
        </a>
      </div>
      <p>{props.desc}</p>
    </div>
  );
}

export default LatestCommits;
