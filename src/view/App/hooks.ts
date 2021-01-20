import { useEffect, useState } from "react";
import { RepoType, repoMapper } from "../../model/Repo";
import { getRepos } from "../../service";

export const useGetGithubRepos = (): [RepoType[], boolean, boolean] => {
  const [repos, setRepos] = useState<RepoType[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function getAllRepos() {
      try {
        setLoading(true);
        setError(false);
        const repos = await getRepos();
        setRepos(repoMapper(repos.data));
        setLoading(false);
      } catch (e) {
        setError(false);
      }
    }
    getAllRepos();
  }, []);
  return [repos, error, loading];
};
