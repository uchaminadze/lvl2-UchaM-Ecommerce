import { Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";

function PagePagination({ limit, total, onChange }) {
  return (
    <Box>
      <Pagination
        count={`${limit}`}
        variant="outlined"
        color="primary"
        onChange={onChange}
      />
    </Box>
  );
}

export default PagePagination;
