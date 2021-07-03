import { Link, List } from "@material-ui/core";
import { Box, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";

function Subcategories() {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Box style={{ width: "100%" }}>
      <Typography variant="h5">Subcategories</Typography>
      <List component="nav">
        <Typography>
          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            underline="none"
          >
            RETURN TO CLOTHING, SHOES, ACCESSORIES
          </Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            underline="none"
          >
            DRESSES
          </Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            underline="none"
          >
            TOPS, TEES & BLOUSES
          </Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            underline="none"
          >
            SWEATERS
          </Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            underline="none"
          >
            FASHION HOODIES & SWEATSHIRTS
          </Link>
        </Typography>
        <Typography>
          <Link
            href="#"
            onClick={preventDefault}
            color="inherit"
            underline="none"
          >
            JEANS
          </Link>
        </Typography>
      </List>
    </Box>
  );
}

export default Subcategories;
