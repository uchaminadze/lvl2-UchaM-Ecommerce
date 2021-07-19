import { serializeProducts, serializeProducts2 } from "./serializers/product";

const Api = {
  baseUrl: "https://fakestoreapi.com/",
  getData: function (url, params, method = "get") {
    return fetch(this.baseUrl + url, {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(params),
    });
  },

  getProductList: function (url) {
    return Api.getData(url)
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
