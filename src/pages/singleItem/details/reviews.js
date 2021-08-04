import {
  CardMedia,
  Grid,
  Icon,
  Typography,
  ListItemIcon,
  TextField,
  Button,
} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import React from "react";
import Image from "../../../images/tinyImg.jpg";

function Reviews() {
  return (
    <Grid container>
      <Grid item md={12} sm={12}>
        <Typography variant="h6">1 review for Fantasy T-shirt</Typography>
        <Grid container item md={12}>
          <Grid item md={1} sm={2} xs={3}>
            <CardMedia
              image={Image}
              style={{
                width: "60%",
                height: "60px",
                backgroundSize: 70,
                minWidth: "60px",
              }}
            />
          </Grid>
          <Grid item md={11} sm={10} xs={9}>
            <Grid container item justify="space-between" md={12}>
              <Typography variant="subtitle1">
                Marthasteward – January 28, 2020
              </Typography>
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
                      style={{
                        fontSize: "13px",
                        color: "blue",
                        width: "15px",
                      }}
                      className={value}
                    ></Icon>
                  );
                })}
              </ListItemIcon>
            </Grid>
            <Typography variant="subtitle2">Nice one, love it!</Typography>
          </Grid>
        </Grid>
        <hr style={{ margin: "16px 0" }} />
        <Typography variant="h5">Add a review</Typography>
        <Typography variant="subtitle1">
          Your email address will not be published.
        </Typography>
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
                style={{
                  fontSize: "13px",
                  color: "blue",
                  width: "15px",
                }}
                className={value}
              ></Icon>
            );
          })}
        </ListItemIcon>
        <Grid container item md={12}>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={10}
            style={{ width: "100%" }}
            placeholder="Your review"
          />
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                color="primary"
                variant="outlined"
                fullWidth="true"
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                color="primary"
                variant="outlined"
                fullWidth="true"
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end" item md={12} sm={12} xs={12}>
            <Button variant="contained" color="primary">
              ADD A REVIEW
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Reviews;
