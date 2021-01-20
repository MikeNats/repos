import React from "react";

import { useStyles } from "./styles";
const Header = ({ children }: { children: React.ReactNode }) => {
  const { header } = useStyles();
  return <header className={header}>{children}</header>;
};

export default React.memo(Header);
