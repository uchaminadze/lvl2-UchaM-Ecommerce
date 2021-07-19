import { Box } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";

function PagePagination({ setCurrentPage }) {
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  return (
    <Box>
      <Pagination
        count={3}
        variant="outlined"
        color="primary"
        onChange={handlePageChange}
      />
    </Box>
  );
}

export default PagePagination;
