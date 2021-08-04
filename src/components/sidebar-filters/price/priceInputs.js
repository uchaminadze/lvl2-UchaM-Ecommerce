import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { blue } from "@material-ui/core/colors";
import UseStyles from "../../../layout/mainlayout/sidebar/sidebarClasses";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function PriceInputs() {
  const classes = UseStyles();

  return (
    <form className={classes.priceInputs} noValidate autoComplete="off">
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="$ Min"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />

        <TextField
          className={classes.margin}
          label="$ Max"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
    </form>
  );
}

export default PriceInputs;
