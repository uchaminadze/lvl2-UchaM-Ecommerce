import { Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";

function PagePagination({ page, onChange }) {
  return (
    <Pagination
      count={20}
      variant="outlined"
      color="primary"
      page={page}
      onChange={onChange}
    />
  );
}

export default PagePagination;
