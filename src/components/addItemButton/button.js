import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProdCart } from "../../store/productsCart/cartActCrt";

function AddButton({ el }) {
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(setProdCart(value));
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() =>
          handleClick([
            {
              img: el.img,
              title: el.title,
              id: el.id,
              price: el.price,
              qnt: 1,
            },
          ])
        }
      >
        <ShoppingCartIcon style={{ fontSize: "13px" }} /> ADD TO CART
      </Button>
    </>
  );
}

export default AddButton;
