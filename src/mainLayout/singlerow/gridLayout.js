import React from "react";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import UseStyles from "./singlerowClasses";
import { Box, Button, Link } from "@material-ui/core";

function GridLayout() {
  const classes = UseStyles();

  const handleClick = (value) => {
    console.log("list-view");
  };

  const handleClick2 = (value) => {
    console.log("module-view");
  };
  return (
    <Box>
      <Button
        value="list"
        aria-label="list"
        className={classes.viewButton}
        onClick={handleClick}
      >
        <ViewListIcon />
      </Button>
      <Button
        value="module"
        className={classes.viewButton}
        aria-label="module"
        onClick={handleClick2}
      >
        <ViewModuleIcon />
      </Button>
    </Box>
  );
}

export default GridLayout;
