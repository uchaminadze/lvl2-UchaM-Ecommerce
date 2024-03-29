import { serializeProducts, serializeProducts2 } from "./serializers/product";
import { serialize } from "object-to-formdata";
const Api = {
  baseUrl: "http://159.65.126.180/api/",
  getData: function (url, params, method = "GET", isFormdata = false) {
    const paramsS = serialize(params);
    const headers = {
      header: isFormdata
        ? {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        : {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
    };
    return fetch(this.baseUrl + url, {
      method: method.toUpperCase(),
      headers: headers.header,
      body: isFormdata ? paramsS : JSON.stringify(params),
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    });
  },

  getProductList: function (url, params) {
    return Api.getData(url, params, "GET").then((json) => {
      return serializeProducts(json.data);
    });
  },

  setSingleItem: function (id) {
    return Api.getData("products/" + id).then((json) => {
      return serializeProducts2(json);
    });
  },

  logInUser: function ({ email, password }) {
    return Api.getData("auth/login", { email, password }, "POST");
  },

  signUpUser: function ({ name, email, password, password_confirmation }) {
    return Api.getData(
      "register",
      { name, email, password, password_confirmation },
      "POST"
    );
  },

  getUserInfo: function (params) {
    return Api.getData("auth/me", params, "POST");
  },

  userUpdate: function (id, values) {
    const formData = {
      name: values.name,
      avatar: values.avatar,
    };
    console.log(formData.avatar);
    return Api.getData(`users/${id}/update`, formData, "POST", true);
  },
};

export default Api;
