import { CardMedia, Typography } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectProdCart } from "../../store/productsCart/cartSelector";

function LeftSide() {
  let cart = useSelector(selectProdCart);
  return (
    <>
      <Paper variant="elevation" elevation="5">
        <Typography variant="h5">Cart ({`${cart.length}`} items)</Typography>

        {cart.length > 0 ? (
          cart.map((el) => {
            return (
              <TableContainer>
                <Table
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <CardMedia
                    image={`${el.img}`}
                    style={{ height: 200, width: 200 }}
                  />
                  <TableBody>
                    <Typography variant="body1">{el.title}</Typography>
                  </TableBody>

                  <TableBody>
                    <Typography variant="body1">${el.price}</Typography>
                  </TableBody>
                </Table>
              </TableContainer>
            );
          })
        ) : (
          <Typography variant="h5">Nothing's here</Typography>
        )}
      </Paper>
    </>
  );
}

export default LeftSide;
