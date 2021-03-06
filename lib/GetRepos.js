import useSWR from "swr";

export function GetRepos() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://api.github.com/users/ajarnagin1992/repos?sort=pushed&per_page=6",
    fetcher
  );
  return {
    repodata: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function GetCommits() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://api.github.com/users/ajarnagin1992/events?per_page=10",
    fetcher
  );
  return {
    commitdata: data,
    isLoading: !error && !data,
    isError: error,
  };
}
