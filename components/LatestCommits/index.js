import React from "react";
import useSWR from "swr";

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
  if (!data) return <div>loading...</div>;
  else {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3">
        {data.map((repo) => {
          return (
            <RepoCard
              key={repo.id}
              name={repo.name}
              desc={repo.description}
            ></RepoCard>
          );
        })}
      </div>
    );
  }
}

function RepoCard(props) {
  return (
    <div className="flex flex-col p-3">
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default LatestCommits;
