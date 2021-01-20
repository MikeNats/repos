export const API_URLS = {
  GET_REPOS: `https://api.github.com/users/${process.env.REACT_APP_GITHUB_USER_NAME}/repos?per_page=${process.env.REACT_APP_MAX_REPOS_NUMBER}`,
};
