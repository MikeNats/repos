import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
const Logo = ({
  width,
  height,
  fontSize,
}: {
  width?: string;
  height?: string;
  fontSize?: string;
}) => {
  const { heading } = useStyles();
  return (
    <>
      <img
        width={width ? width : "42"}
        height={height ? height : "36"}
        src={"./fb.png"}
        alt="logo"
      />

      <Typography
        style={{
          fontSize: `${fontSize ? fontSize : 20}px`,
        }}
        className={heading}
        variant="h1"
      >
        Repository
      </Typography>
    </>
  );
};

export default React.memo(Logo);
