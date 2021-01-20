import React from "react";
import { ErrorBoundary } from "../common/ErrorBoundary";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { useGetGithubRepos } from "./hooks";
import { theme } from "./style";
import { ErroPage } from "../pages/ErrorPage";
import { LoadingPage } from "../pages/LoadingPage";
import { SearchPage } from "../pages/SearchPage";

const App: React.FC = () => {
  const [repos, error, loading] = useGetGithubRepos();

  return (
    <section className="App">
      <ErrorBoundary>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <ErrorBoundary>
            <>
              {loading && <LoadingPage />}
              {error && <ErroPage />}
              {repos && !!repos.length && <SearchPage repos={repos} />}
            </>
          </ErrorBoundary>
        </MuiThemeProvider>
      </ErrorBoundary>
    </section>
  );
};

export default App;
