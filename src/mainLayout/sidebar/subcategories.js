import { Link, List } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import React from "react";

function Subcategories() {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Box style={{ width: "100%" }}>
      <Typography variant="h6">Subcategories</Typography>
      <List component="nav">
        {[
          "RETURN TO CLOTHING, SHOES, ACCESSORIES",
          "DRESSES",
          "TOPS, TEES & BLOUSES",
          "SWEATERS",
          "FASHION HOODIES & SWEATSHIRTS",
          "JEANS",
        ].map((value) => {
          return (
            <Typography variant="body2" style={{ marginTop: "1rem" }}>
              <Link
                href="#"
                onClick={preventDefault}
                color="inherit"
                underline="none"
              >
                {value}
              </Link>
            </Typography>
          );
        })}
      </List>
    </Box>
  );
}

export default Subcategories;
