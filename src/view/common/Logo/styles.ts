import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      padding: "24px 0",
      alignItems: "center",
    },
    heading: {
      height: "24px",
      color: "#3B5998",
      fontFamily: "Montserrat",
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: "24px",
    },
  })
);
