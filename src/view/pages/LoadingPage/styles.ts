import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
    },
    loading: {
      width: "156px",
      color: "#3B5998",
      fontFamily: "Montserrat",
      fontSize: "42px",
      fontWeight: 300,
    },
    loader: {
      stroke: "url(#linearColors)",
    },
  })
);
