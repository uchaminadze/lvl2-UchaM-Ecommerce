import { Icon, ListItemIcon, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

function Description({ items }) {
  return (
    <Grid container>
      <Grid item md={12}>
        <Typography variant="h6">Product Description</Typography>
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
        <Typography variant="body1">{items.price} $</Typography>
        <Typography variant="body2">{items.desc}</Typography>
      </Grid>
    </Grid>
  );
}

export default Description;
