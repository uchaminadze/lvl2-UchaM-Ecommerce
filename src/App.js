import { useFormik } from "formik";
import React from "react";
import "./App.scss";
// import UserData from "./user/user";
import * as Yup from "yup";

function App() {
  const { errors, touched, handleSubmit, getFieldProps, isSubmitting } =
    useFormik({
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
          .required("Required"),
        lastName: Yup.string()
          .max(15, <span className="valid">Must be 15 characters or less</span>)
          .min(2, <span className="valid">Must be 2 characters or more</span>)
          .required("Required"),
        password: Yup.string()
          .min(3, <span className="valid">Must be 3 characters or more</span>)
          .max(8, <span className="valid">Must be 8 characters or less</span>)
          .required("Required"),
        email: Yup.string()
          .email(<span className="valid">Invalid email address</span>)
          .required("Required"),
        phone: Yup.string().max(
          9,
          <span className="valid">Must be 9 characters or less</span>
        ),
      }),
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
    });

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          {...getFieldProps("email")}
          id="email"
        />
        {errors.email && touched.email && errors.email}

        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          name="userName"
          {...getFieldProps("userName")}
          id="userName"
          errors={errors}
        />
        {errors.userName && touched.userName && errors.userName}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          {...getFieldProps("password")}
          id="password"
        />
        {errors.password && touched.password && errors.password}

        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          {...getFieldProps("firstName")}
          id="firstName"
        />
        {errors.firstName && touched.firstName && errors.firstName}

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          {...getFieldProps("lastName")}
          id="lastName"
        />
        {errors.lastName && touched.lastName && errors.lastName}

        <label htmlFor="city">City:</label>
        <input type="text" name="city" {...getFieldProps("city")} id="city" />
        {errors.city && touched.city && errors.city}

        <label htmlFor="street">Street:</label>
        <input
          type="text"
          name="street"
          {...getFieldProps("street")}
          id="street"
        />
        {errors.street && touched.street && errors.street}
        <label htmlFor="number">Number:</label>
        <input
          type="number"
          name="number"
          {...getFieldProps("number")}
          id="number"
        />
        {errors.number && touched.number && errors.number}
        <label htmlFor="zipcode">Zipcode:</label>
        <input
          type="text"
          name="zipcode"
          {...getFieldProps("zipcode")}
          id="zipcode"
        />
        {errors.zipcode && touched.zipcode && errors.zipcode}

        <label htmlFor="lat">Latitude:</label>
        <input type="text" name="lat" {...getFieldProps("lat")} id="lat" />
        {errors.lat && touched.lat && errors.lat}

        <label htmlFor="long">Longitude:</label>
        <input type="text" name="long" {...getFieldProps("long")} id="long" />
        {errors.long && touched.long && errors.long}

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          {...getFieldProps("phone")}
          id="phone"
          placeholder="ex: 531-12-34-56"
        />
        {errors.phone && touched.phone && errors.phone}

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
