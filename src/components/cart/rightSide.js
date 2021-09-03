import { Paper, TextField } from "@material-ui/core";
import {
  Table,
  Box,
  Container,
  Grid,
  TableBody,
  TableContainer,
  Typography,
  Button,
} from "@material-ui/core";
import CartLayout from "../../layout/cartLayout/cartLayout";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { selectProdCart } from "../../store/productsCart/cartSelector";
import { setProdCart } from "../../store/productsCart/cartActCrt";
import { useEffect } from "react";

function RightSide() {
  let cart = useSelector(selectProdCart);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const classes = useStyles();

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  return (
    <>
      <Paper variant="elevation" elevation="5">
        <Typography variant="h5">The total amount of</Typography>
        <TableContainer>
          <Table style={{ display: "flex", justifyContent: "space-between" }}>
            <TableBody>
              <Typography variant="body1">Temporary amount</Typography>
              <Typography variant="body1">Shipping</Typography>
            </TableBody>

            <TableBody>
              <Typography variant="body1">${Math.round(total)}</Typography>
              <Typography variant="body1">Gratis</Typography>
            </TableBody>
          </Table>
          <hr />
          <Table style={{ display: "flex", justifyContent: "space-between" }}>
            <TableBody>
              <Typography variant="body1">
                <strong>The total amount of</strong>
              </Typography>
              <Typography variant="body1">
                <strong>(including VAT)</strong>
              </Typography>
            </TableBody>

            <TableBody>
              <Typography variant="body1">
                <strong>${Math.round(total)}</strong>
              </Typography>
            </TableBody>
          </Table>
          <Button size="large" variant="contained" color="primary" fullWidth>
            GO TO CHECKOUT
          </Button>
        </TableContainer>
      </Paper>
      <Paper variant="elevation" elevation="5">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Add a discount code (optional)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              placeholder="Enter discount code"
              fullWidth
              variant="outlined"
            />
          </AccordionDetails>
        </Accordion>
      </Paper>
    </>
  );
}

export default RightSide;
