type RepoType = {
  name: string;
  stargazers_count: number;
  description: string;
  id: number;
};

export enum RepoTypeSortAttr {
  "name" = "name",
  "stargazers_count" = "stargazers_count",
  "none" = "",
}

export enum RepoTypeSearchAttr {
  "name" = "name",
}

export type GithuRepositoryType = {
  id: number;
  name: string;
  full_name: string;
  owner: RepositoryOwner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: any;
  has_issues: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
export interface RepositoryOwner {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

type GithubReponse = {
  config: { [x: string]: any };
  data: GithuRepositoryType[];
  headers: { [x: string]: any };
  request: XMLHttpRequest;
  status: number;
  statusText: string;
};

export type { RepoType, GithubReponse };

export const repoMapper = (
  GithuRepositoryType: GithuRepositoryType[]
): RepoType[] =>
  GithuRepositoryType.map(({ id, name, description, stargazers_count }) => ({
    id,
    name,
    description,
    stargazers_count,
  }));

export const sortRepoBy = (
  attr: RepoTypeSortAttr,
  GithuRepositoryType: RepoType[]
): RepoType[] =>
  GithuRepositoryType.sort((a: RepoType, b: RepoType) => {
    if (attr === RepoTypeSortAttr.none) {
      return 0;
    }
    if (a[attr] < b[attr]) {
      return attr === RepoTypeSortAttr.name ? -1 : 1;
    }
    if (a[attr] > b[attr]) {
      return attr === RepoTypeSortAttr.name ? 1 : -1;
    }
    return 0;
  });

export const filterRepoBy = (
  attr: RepoTypeSearchAttr,
  GithuRepositoryType: RepoType[],
  term: string,
  repos: RepoType[]
): RepoType[] =>
  !!term && !!term.replace(/ /g, "")
    ? GithuRepositoryType.filter(
        (repo: RepoType) =>
          repo[attr].toLowerCase().indexOf(term.toLowerCase()) !== -1
      )
    : repos;
