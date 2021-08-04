import { Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import Api from "../../api";

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
