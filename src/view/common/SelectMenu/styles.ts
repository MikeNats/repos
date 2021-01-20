import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      height: "15px",
      color: "#3B5998",
      fontFamily: "Montserrat",
      fontSize: "12px",
      letterSpacing: 0,
      padding: "18px 8px",
      lineHeight: "15px",
      border: "1px solid #3B5998",
      borderRadius: "2px",
    },
    menuLabel: {
      height: "15px",
      color: "#3B5998",
      fontFamily: "Montserrat",
      fontSize: "12px",
      letterSpacing: 0,
      lineHeight: "15px",
      textAlign: "right",
      marginRight: "10px",
      fontWeight: 600,
    },
    menuButtonIcon: {
      marginLeft: "0px",
    },
    menuButtonNav: {
      border: "1px solid #3C5998",
    },
  })
);
