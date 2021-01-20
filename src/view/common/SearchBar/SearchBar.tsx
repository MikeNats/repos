import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Box } from "@material-ui/core";
const SearchBar = ({
  searchTerm,
  placeholder,
  value,
  classes,
  ...rest
}: {
  placeholder: string;
  value: string;
  searchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes: { [x: string]: string };
}) => (
  <div className={classes.search}>
    <InputBase
      value={value}
      placeholder={placeholder}
      onChange={searchTerm}
      inputProps={rest}
      className={classes.searchInput}
    />
    <Box className={classes.searchBoxIcon}>
      <SearchIcon className={classes.searchIcon} />
    </Box>
  </div>
);

export default React.memo(SearchBar);
