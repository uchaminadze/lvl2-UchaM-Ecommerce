import { Box } from "@material-ui/core";
import React from "react";
import GridLayout from "./gridLayout";
import PagePagination from "./pagintaion";
import UseStyles from "./singlerowClasses";

function SingleRow({ page, onChange }) {
  const classes = UseStyles();
  return (
    <Box className={classes.main}>
      <GridLayout />
      <PagePagination page={page} onChange={onChange} />
    </Box>
  );
}

export default SingleRow;
