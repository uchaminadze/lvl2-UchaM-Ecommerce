import { Box, Grid } from "@material-ui/core";
import React from "react";

function Colors() {
  return (
    <Box style={{ width: 300 }}>
      <Grid item>
        <Grid container>
          {[
            "white",
            "grey",
            "black",
            "green",
            "cyan",
            "darkviolet",
            "yellow",
            "turquoise",
            "orangered",
            "orange",
          ].map((value) => {
            return (
              <Grid
                item
                style={{
                  width: "35px",
                  borderRadius: "100%",
                  height: "35px",
                  backgroundColor: `${value}`,
                  cursor: "pointer",
                  border: "1px solid grey",
                }}
              ></Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Colors;
