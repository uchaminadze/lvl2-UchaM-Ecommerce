import { serializeProducts, serializeProducts2 } from "./serializers/product";

const Api = {
  baseUrl: "https://fakestoreapi.com/",
  getData: function (url, params, method = "get") {
    return fetch(this.baseUrl + "products", {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(params),
    });
  },

  getProductList: function () {
    return Api.getData("params")
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        return serializeProducts(data);
      });
  },

  setSingleItem: function (id) {
    return fetch(this.baseUrl + `products/${id}`)
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        return serializeProducts2(data);
      });
  },
};

export default Api;
