import React from "react";
import { useStyles } from "./styles";

const HVCenter = ({ children }: { children: React.ReactNode }) => {
  const { HVCenter } = useStyles();
  return <main className={HVCenter}>{children}</main>;
};

export default React.memo(HVCenter);
