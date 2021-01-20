import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        "&:before": {
          display: "none",
        },
      },
    },

    MuiSvgIcon: {
      root: {
        color: "#3C5998!important",
      },
    },
    MuiFormControl: {
      root: {
        border: "1px solid #3C5998",
      },
    },
    MuiSelect: {
      root: {
        "&:focus": {
          background: "transparent",
        },
        padding: 0,
        height: "32px",
        width: "56px",
      },
    },
    MuiButtonBase: {
      root: {
        marginBottom: "1px",
      },
    },
    MuiList: {
      root: {
        margin: 0,
        padding: "0!important",
      },
    },
  },
});
