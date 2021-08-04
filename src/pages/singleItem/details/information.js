import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import { Grid, Typography } from "@material-ui/core";
import React from "react";
import UseStyles from "./detailsClasses";

function Information() {
  const classes = UseStyles();
  return (
    <Grid container item>
      <Grid item md={12} sm={12} xs={12}>
        <Typography variant="h6">Additional Information</Typography>
        <TableContainer>
          <Table>
            <Grid container>
              <Grid item md={2} sm={3} xs={5}>
                <Typography variant="body1" className={classes.tableP}>
                  <strong>Weight</strong>
                </Typography>
                <Typography variant="body1" className={classes.tableP}>
                  <strong>Dimensions</strong>
                </Typography>
              </Grid>

              <Grid item md={10} sm={9} xs={7}>
                <Typography variant="body1" className={classes.tableP}>
                  0.3 kg
                </Typography>
                <Typography variant="body1" className={classes.tableP}>
                  50 x 60 cm
                </Typography>
              </Grid>
            </Grid>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Information;
