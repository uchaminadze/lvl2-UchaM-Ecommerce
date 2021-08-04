import {
  Box,
  Grid,
  Icon,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { loadCSS } from "fg-loadcss";
import React from "react";
import Buttons from "./buttons";
import Quantity from "./quantity";
import Size from "./size";
import ItemTable from "./table";

function SingleItemRight({ items }) {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <Box>
      <Typography variant="h6"> {items.title}</Typography>
      <Typography variant="body1">{items.category}</Typography>
      <ListItemIcon style={{ alignItems: "center" }}>
        {[
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
          "fas fa-star",
          "far fa-star",
        ].map((value) => {
          return (
            <Icon
              style={{ fontSize: "15px", color: "blue" }}
              className={value}
            ></Icon>
          );
        })}
      </ListItemIcon>
      <Typography variant="body2">{items.price} $</Typography>
      <Typography variant="body1">{items.desc}</Typography>
      <ItemTable />
      <hr style={{ margin: "20px 0 20px 0" }} />
      <Grid container md={12}>
        <Grid item md={3} xs={12} sm={3}>
          <Quantity />
        </Grid>
        <Grid item md={9} alignItems="center">
          <Size />
        </Grid>
      </Grid>
      <Buttons />
    </Box>
  );
}

export default SingleItemRight;
