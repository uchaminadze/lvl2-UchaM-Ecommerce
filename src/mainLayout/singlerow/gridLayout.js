import React from "react";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import UseStyles from "./singlerowClasses";
import { Box, Button, Link } from "@material-ui/core";

function GridLayout() {
  const classes = UseStyles();

  return (
    <Box>
      <Button value="list" aria-label="list" className={classes.viewButton}>
        <ViewListIcon />
      </Button>
      <Button value="module" className={classes.viewButton} aria-label="module">
        <ViewModuleIcon />
      </Button>
    </Box>
  );
}

export default GridLayout;
