import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { CardMedia } from "@material-ui/core";

export default function ProductTable({ items, classes }) {
  return (
    <>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Price</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Description</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Image</strong>
              </TableCell>
              <TableCell align="left">
                <strong>Category</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((el) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {el.title}
                </TableCell>
                <TableCell align="left" style={{ width: 100 }}>
                  {el.price} $
                </TableCell>
                <TableCell align="left">{el.desc}</TableCell>
                <TableCell style={{ width: 200 }}>
                  <CardMedia
                    image={el.img}
                    style={{
                      width: "100%",
                      height: "100px",
                      backgroundSize: "70px",
                      minWidth: 100,
                    }}
                  />
                </TableCell>
                <TableCell align="left">{el.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
