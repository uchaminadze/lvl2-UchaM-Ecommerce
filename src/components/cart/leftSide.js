import { Typography } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectProd, selectProdCart } from "../../store/products/prodSelector";

function LeftSide() {
  const prodCart = useSelector(selectProdCart);
  let cookie = document.cookie;

  if (cookie) {
    cookie = JSON.parse(cookie);
    console.log(cookie);
  }

  return (
    <>
      <Paper variant="elevation" elevation="5">
        <Typography variant="h5">
          Cart ({`${prodCart.length}`} items)
        </Typography>
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
