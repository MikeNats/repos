import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: "flex",
      alignItems: "center",
      padding: "24px",
    },
  })
);
