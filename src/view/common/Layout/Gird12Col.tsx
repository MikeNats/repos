import React from "react";
import { useStyles } from "./styles";
const Gird12Col = ({ children }: { children: React.ReactNode }) => {
  const { grid12Col } = useStyles();
  return <main className={grid12Col}>{children}</main>;
};

export default React.memo(Gird12Col);
