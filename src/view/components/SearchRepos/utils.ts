import { RepoType } from "../../../model/Repo";
import { ceil } from "lodash";

export const fromItem = (
  pagesNumber: number,
  numOfvisibleRepos: number
): number => (pagesNumber - 1) * numOfvisibleRepos;

export const toItem = (
  pagesNumber: number,
  numOfvisibleRepos: number
): number => (pagesNumber - 1) * numOfvisibleRepos + numOfvisibleRepos;

export const setPages = (
  visibleRepos: RepoType[],
  numOfvisibleRepos: number
): number => ceil(visibleRepos.length / numOfvisibleRepos);
