import React from "react";
import { Logo } from "../../common/Logo";
import { HVCenter } from "../../common/Layout";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const LoadingPage: React.FC = () => {
  const { box, loading, loader } = useStyles();
  return (
    <HVCenter>
      <Box className={box}>
        <Logo width={"86"} height={"76"} fontSize={"48"} />
      </Box>
      <Box className={box}>
        <>
          <svg width="0" height="0">
            <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
              <stop offset="20%" stopColor="#E6D18F" />
              <stop offset="90%" stopColor="#F67924" />
            </linearGradient>
          </svg>
          <CircularProgress classes={{ circle: loader }} />
        </>
        <Typography className={loading}>loading</Typography>
      </Box>
    </HVCenter>
  );
};

export default React.memo(LoadingPage);
