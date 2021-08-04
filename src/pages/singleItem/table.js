import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";

function ItemTable() {
  return (
    <>
      <TableContainer>
        <Table style={{ display: "flex", gap: "5rem" }}>
          <TableBody>
            <Typography variant="body1">
              <strong>Model</strong>
            </Typography>
            <Typography variant="body1">
              <strong>Color</strong>
            </Typography>
            <Typography variant="body1">
              <strong>Delivery</strong>
            </Typography>
          </TableBody>

          <TableBody>
            <Typography variant="body1">Shirt 5407X</Typography>
            <Typography variant="body1">Blue</Typography>
            <Typography variant="body1">USA, Europe</Typography>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ItemTable;
