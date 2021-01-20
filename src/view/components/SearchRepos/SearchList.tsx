import { Box, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { throttle } from "lodash";
import {
  filterRepoBy,
  RepoTypeSearchAttr,
  RepoType,
  RepoTypeSortAttr,
  sortRepoBy,
} from "../../../model/Repo";
import SearchListItem from "./SearchListItem";
import { SearchBar } from "../../common/SearchBar";
import { fromItem, toItem, setPages } from "./utils";
import { useStyles } from "./styles";
import { SelectMenu } from "../../common/SelectMenu";
const SearchList = ({
  repos,
  reposPerPage,
}: {
  repos: RepoType[];
  reposPerPage: number;
}) => {
  const {
    searchList,
    search,
    searchInput,
    searchBoxIcon,
    searchIcon,
    title,
    paginationContainer,
    searchListItemContainer,
    searchToolBar,
    seperator,
    resultspp,
    menuBox,
  } = useStyles();
  const [numOfvisibleRepos, setNumOfvisibleRepos] = useState<number>(
    reposPerPage
  );
  const [pagesNumber, setPagesNumber] = useState<number>(1);
  const [visibleRepos, setVisibleRepos] = useState<RepoType[]>(repos);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [anchorElSort, setAnchorElSort] = React.useState<null | HTMLElement>(
    null
  );
  const [
    anchorElResults,
    setAnchorElResults,
  ] = React.useState<null | HTMLElement>(null);

  const [sortByAttr, setSortByAttr] = useState<RepoTypeSortAttr>(
    RepoTypeSortAttr.none
  );

  const paginationPage = (e: React.ChangeEvent<any>, page: number): void =>
    setPagesNumber(page);

  const handleMenuClickSort = (e: React.MouseEvent<HTMLElement>): void =>
    setAnchorElSort(e.currentTarget);

  const sortBy = (e: React.ChangeEvent<any>): void => {
    setSortByAttr(e.target.getAttribute("data-attr"));
    setAnchorElSort(null);
  };

  const handleMenuClickResults = (e: React.MouseEvent<HTMLElement>): void =>
    setAnchorElResults(e.currentTarget);

  const setPageResults = (e: React.ChangeEvent<any>): void => {
    setNumOfvisibleRepos(parseInt(e.target.getAttribute("data-attr")));
    setAnchorElResults(null);
  };

  const searchName = throttle((event): void => {
    setSearchTerm(event.target.value.trim());
    setVisibleRepos(
      filterRepoBy(
        RepoTypeSearchAttr.name,
        visibleRepos,
        event.target.value.trim(),
        repos
      )
    );
  }, 200);

  return (
    <Box className={searchList}>
      <SearchBar
        placeholder="Search"
        searchTerm={searchName}
        value={searchTerm}
        classes={{
          search,
          searchInput,
          searchBoxIcon,
          searchIcon,
        }}
      />
      <Grid className={searchToolBar}>
        <Typography className={title} variant="h2">
          Repository results
        </Typography>
        <Box className={menuBox}>
          <SelectMenu
            ariaName={"sortBy"}
            className={seperator}
            defaultButtonValue={"Sort by"}
            handleMenuClick={handleMenuClickSort}
            anchorEl={anchorElSort}
            setValue={sortBy}
            value={sortByAttr}
            menuItems={[
              {
                attr: RepoTypeSortAttr.name,
                name: "Name",
              },
              {
                attr: RepoTypeSortAttr.stargazers_count,
                name: "Stars count",
              },
            ]}
          />
          <SelectMenu
            className={resultspp}
            ariaName={"results-per-page"}
            handleMenuClick={handleMenuClickResults}
            anchorEl={anchorElResults}
            setValue={setPageResults}
            value={numOfvisibleRepos}
            label={"results per page"}
            menuItems={[
              {
                attr: 8,
                name: "8",
              },
              {
                attr: 16,
                name: "16",
              },
            ]}
          />
        </Box>
      </Grid>
      <Grid className={searchListItemContainer}>
        {sortRepoBy(sortByAttr, visibleRepos)
          .slice(
            fromItem(pagesNumber, numOfvisibleRepos),
            toItem(pagesNumber, numOfvisibleRepos)
          )
          .map((repo) => (
            <SearchListItem key={repo.id} repo={repo} />
          ))}
      </Grid>
      <Grid className={paginationContainer}>
        <Pagination
          color="primary"
          count={setPages(visibleRepos, numOfvisibleRepos)}
          variant="outlined"
          onChange={paginationPage}
          shape="rounded"
        />
      </Grid>
    </Box>
  );
};

export default React.memo(SearchList);
