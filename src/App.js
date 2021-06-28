import { useFormik } from "formik";
import React from "react";
import "./App.scss";
import UserData from "./user/user";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      city: "",
      street: "",
      number: "",
      zipcode: "",
      lat: "",
      long: "",
      phone: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(10, <span className="valid">Must be 10 characters or less</span>)
        .min(2, <span className="valid">Must be 2 characters or more</span>)
        .required(<span className="valid">*</span>),
      lastName: Yup.string()
        .max(15, <span className="valid">Must be 15 characters or less</span>)
        .min(2, <span className="valid">Must be 2 characters or more</span>)
        .required(<span className="valid">*</span>),
      password: Yup.string()
        .min(3, <span className="valid">Must be 3 characters or more</span>)
        .max(8, <span className="valid">Must be 8 characters or less</span>)
        .required(<span className="valid">*</span>),
      email: Yup.string()
        .email(<span className="valid">Invalid email address</span>)
        .required(<span className="valid">*</span>),
      phone: Yup.string().max(
        9,
        <span className="valid">Must be 9 characters or less</span>
      ),
    }),
    onSubmit: (values) => {
      fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify({
          email: formik.values.email,
          username: formik.values.userName,
          password: formik.values.password,
          name: {
            firstname: formik.values.firstName,
            lastname: formik.values.lastName,
          },
          address: {
            city: formik.values.city,
            street: formik.values.street,
            number: formik.values.number,
            zipcode: formik.values.zipcode,
            geolocation: {
              lat: formik.values.lat,
              long: formik.values.long,
            },
          },
          phone: formik.values.phone,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="App">
      <UserData formik={formik} />
    </div>
  );
}

export default App;
