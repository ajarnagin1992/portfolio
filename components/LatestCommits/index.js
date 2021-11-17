import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR(
    "https://api.github.com/users/ajarnagin1992/repos?sort=created",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  else {
    let myData = data.splice(0, 6);
    return <div>hello {myData[0].id}!</div>;
  }
}

function LatestCommits() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default LatestCommits;
