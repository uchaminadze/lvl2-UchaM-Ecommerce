import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCounter } from "../../store/products/prodActCrt";
import { selectCounter } from "../../store/products/prodSelector";

function Quantity() {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  const counterUp = () => {
    dispatch(setCounter(counter + 1));
  };

  const counterDown = () => {
    dispatch(setCounter(counter - 1));
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
          <TextField
            variant="outlined"
            inputProps={{ style: { textAlign: "center" } }}
            value={counter}
          />
        </Paper>

        <Paper variant="outlined">
          <IconButton onClick={counterUp}>+</IconButton>
        </Paper>
      </Grid>
    </>
  );
}

export default Quantity;
