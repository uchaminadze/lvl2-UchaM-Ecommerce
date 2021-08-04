import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";

function Quantity() {
  const [counter, setCounter] = useState(0);
  const counterUp = () => {
    setCounter(counter + 1);
  };

  const counterDown = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <Typography variant="body1">Quantity</Typography>

      <Grid container>
        <Paper variant="outlined">
          {counter === 0 ? (
            <IconButton onClick={counterDown} disabled>
              -
            </IconButton>
          ) : (
            <IconButton onClick={counterDown}>-</IconButton>
          )}
        </Paper>

        <Paper
          variant="outlined"
          style={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography component="span">{counter}</Typography>
        </Paper>

        <Paper variant="outlined">
          <IconButton onClick={counterUp}>+</IconButton>
        </Paper>
      </Grid>
    </>
  );
}

export default Quantity;
