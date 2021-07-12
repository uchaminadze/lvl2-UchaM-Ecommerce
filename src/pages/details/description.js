import { Icon, ListItemIcon, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";

function Description({ price }) {
  return (
    <Grid container>
      <Grid item md={12}>
        <Typography variant="h6">Product Description</Typography>
        <Typography variant="body1">SHIRTS</Typography>
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
        <Typography variant="body1">{price}</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
          perferendis voluptates laboriosam. Distinctio, officia quis dolore
          quos sapiente tempore alias.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Description;
