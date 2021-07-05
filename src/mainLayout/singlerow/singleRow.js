import { Box } from "@material-ui/core";
import React from "react";
import GridLayout from "./gridLayout";
import PagePagination from "./pagintaion";
import UseStyles from "./singlerowClasses";

function SingleRow() {
  const classes = UseStyles();
  return (
    <Box className={classes.main}>
      <GridLayout />
      <PagePagination />
    </Box>
  );
}

export default SingleRow;
