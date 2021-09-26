import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SingleRow from "../../components/singlerow/singleRow";
import ItemCard from "../../components/items/itemsCard";
import Api from "../../api";
import Loader from "../../components/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setProd } from "../../store/products/prodActCrt";
import { selectPage, selectProd } from "../../store/products/prodSelector";

// import ItemCard2 from "./itemsCard2";

function ItemList() {
  const [loading, setIsLoading] = useState(false);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    Api.getProductList("/")
      .then((resp) => {
        dispatch(setProd(resp));
        console.log(resp);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const changePage = (event, value) => {
    setIsLoading(true);
    Api.getProductList(`products?page=${value}`)
      .then(() => {
        dispatch(setPage(value));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Grid container>
      <SingleRow page={page} onChange={changePage} />
      <Grid container style={{ marginTop: "2rem" }}>
        {/* <ItemCard2 items={items} />  */}
        <Loader isLoading={loading}>
          <ItemCard />
        </Loader>
      </Grid>
      <SingleRow page={page} onChange={changePage} />
    </Grid>
  );
}

export default ItemList;
