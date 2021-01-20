import React from "react";
import { Logo } from "../../common/Logo";
import { Header } from "../../common/Header";
import { SearchList } from "../../components/SearchRepos";
import { Gird12Col } from "../../common/Layout";
import { RepoType } from "../../../model/Repo";
const LoadingPage = ({ repos }: { repos: RepoType[] }) => {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Gird12Col>
        <SearchList repos={repos} reposPerPage={8} />
      </Gird12Col>
    </>
  );
};

export default React.memo(LoadingPage);
