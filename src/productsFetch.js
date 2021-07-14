import { useEffect } from "react";
import Api from "./api";

export const ProductsFetch = {
  ListFetch: function ({ setItems, setIsLoading }) {
    useEffect(() => {
      setIsLoading(true);
      Api.getProductList()
        .then((resp) => setItems(resp))
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
  },

  ItemFetch: function ({ id, setItems, setIsLoading }) {
    useEffect(() => {
      setIsLoading(true);
      Api.setSingleItem(id)
        .then((res) => setItems(res))
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
  },
};
