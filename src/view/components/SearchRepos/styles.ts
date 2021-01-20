import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchList: {
      "grid-column-start": 2,
      "grid-column-end": 11,

      [theme.breakpoints.down("sm")]: {
        "grid-column-start": 1,
        "grid-column-end": 12,
        padding: "0 30px",
      },
      padding: "0 3px",
    },
    search: {
      border: "1px solid #3B5998",
      borderRadius: "50px",
      paddingLeft: "20px",
      display: "flex",
      height: "48px",
      justifyContent: "space-between",
      width: "76%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    searchInput: {
      width: "100%",
    },
    menuBox: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "10px",
        justifyContent: "space-between",
      },
      display: "flex",
    },
    searchListItemContainer: {
      padding: "15px",
      border: "1px solid #3B5998",
    },
    resultspp: {
      display: "flex",
      alignItems: "center",
    },
    searchBoxIcon: {
      background: "#A3B0CF",
      width: "38px",
      height: "38px",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "4px 4px 0 0",
    },
    searchIcon: {
      fill: "#fff",
    },
    seperator: {
      marginRight: "36px",
    },
    searchToolBar: {
      marginTop: "55px",
      marginBottom: "8px",
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
      flexDirection: "row",
      justifyContent: "space-between",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "10px",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
    title: {
      height: "27px",
      color: "#3B5998",
      fontFamily: "Montserrat",
      fontSize: "22px",
      fontWeight: 600,
      letterspacing: 0,
      lineHeight: "27px",
    },
    innerLabel: {
      color: "#3B5998",
      fontFamily: "Montserrat",
      fontSize: "12px",
      marginTop: "-9px",
    },
    optionStyle: {
      height: "83px",
      width: "88px",
      color: "#3B5998",
      background: "#fff",
    },
    accordion: {
      marginBottom: "5px!important",
      marginTop: "0px!important",

      boxShadow: "none",
      border: "1px solid #3B5998",
      borderRadius: "2px",
    },
    accordionSummary: {
      minHeight: "48px",
      background: "#E8EBF3",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        overflow: "hidden",
      },
    },
    accordionSummarySubContainer: {
      display: "flex",
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
    accordionTitle: {
      color: "#3B5998",
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontWeight: 600,
      letterSpacing: 0,
      width: "45%",
      overflowWrap: "break-word",

      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    starsContainer: {
      minWidth: "70px",
      background: "#fff",
      borderRadius: "50px",
      paddingRight: "10px",
      display: "flex",
      height: "26px",
      border: "1px solid #3B5998",
    },
    starsIcon: {
      fill: "#3B5998",
      marginRight: "15px",
    },
    starsCout: {
      color: "#3B5998",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        width: "100%",
      },
    },
    accordionDetails: {
      display: "flex",
      flexDirection: "column",
    },
    accordionDescriptionTitle: {
      marginTop: "8px",
      color: "#3B5998",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: 0,
    },
    accordionDescription: {
      color: "#3B5998",
      fontFamily: "Montserrat",
      fontSize: "12px",
      fontWeight: 300,
      letterSpacing: 0,
      lineHeight: "15px",
    },
  })
);
