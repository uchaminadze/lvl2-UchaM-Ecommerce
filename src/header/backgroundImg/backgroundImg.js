import { Box, Typography } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import React from "react";
import UseStyles from "../headerClasses";

function BackgroundImg() {
  const classes = UseStyles();
  return (
    <div>
      <CardMedia
        classes={{
          root: classes.headerBackground,
        }}
      >
        <Box
          classes={{
            root: classes.overlay,
          }}
        >
          <Typography variant="h3" style={{ color: "white" }}>
            Shop
          </Typography>
        </Box>
      </CardMedia>
    </div>
  );
}

export default BackgroundImg;
