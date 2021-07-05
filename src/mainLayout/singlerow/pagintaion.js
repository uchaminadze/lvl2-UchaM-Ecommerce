import { Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";

function PagePagination() {
  return (
    <Box>
      <Pagination count={3} variant="outlined" color="primary" />
    </Box>
  );
}

export default PagePagination;
