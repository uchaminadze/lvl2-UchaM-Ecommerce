import { Icon, ListItemIcon, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectSingleProd } from "../../../store/singleProduct/singleSelector";

function Description() {
  let item = useSelector(selectSingleProd);
  return (
    <Grid container>
      <Grid item md={12}>
        <Typography variant="h6">Product Description</Typography>
        <Typography variant="body1">{item.category}</Typography>
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
        <Typography variant="body1">{item.price} $</Typography>
        <Typography variant="body2">{item.desc}</Typography>
      </Grid>
    </Grid>
  );
}

export default Description;
