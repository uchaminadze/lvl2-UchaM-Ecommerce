import { Typography } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { selectProd } from "../../store/products/prodSelector";

function LeftSide() {
  let cookie;

  if (document.cookie) {
    cookie = JSON.parse(document.cookie);
    console.log(cookie);
  }

  return (
    <>
      <Paper variant="elevation" elevation="5">
        <Typography variant="h5">Cart (2 items)</Typography>
        {cookie ? (
          <TableContainer>
            <Table style={{ display: "flex", justifyContent: "space-between" }}>
              <TableBody>
                <Typography variant="body1">{cookie.title}</Typography>
              </TableBody>

              <TableBody>
                <Typography variant="body1">${cookie.price}</Typography>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="h5">Nothing's here</Typography>
        )}
      </Paper>
    </>
  );
}

export default LeftSide;
