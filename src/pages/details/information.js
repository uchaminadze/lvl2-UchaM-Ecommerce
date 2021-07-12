import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import { Grid, Typography } from "@material-ui/core";
import React from "react";

function Information() {
  return (
    <Grid container>
      <Grid item md={12}>
        <Typography variant="h6">Additional Information</Typography>
        <TableContainer>
          <Table
            style={{ display: "flex", gap: "5rem", border: "1px solid grey" }}
          >
            <TableBody>
              <Typography variant="body1">
                <strong>Weight</strong>
              </Typography>
              <Typography variant="body1">
                <strong>Dimensions</strong>
              </Typography>
            </TableBody>

            <TableBody>
              <Typography variant="body1">0.3 kg</Typography>
              <Typography variant="body1">50 x 60 cm</Typography>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Information;
