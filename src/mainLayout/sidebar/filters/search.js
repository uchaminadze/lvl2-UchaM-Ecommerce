import { IconButton, Paper, TextField, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@material-ui/core";
import React from "react";
import UseStyles from "../sidebarClasses";

function Search() {
  const classes = UseStyles();
  return (
    <Box style={{ width: "100%" }}>
      <Typography variant="h5">Filters</Typography>
      <Paper component="form" className={classes.root}>
        <TextField
          className={classes.input}
          id="outlined-size-normal"
          placeholder="Search..."
          variant="outlined"
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default Search;
