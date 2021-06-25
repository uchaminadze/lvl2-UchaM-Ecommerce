import React, { useEffect, useState } from "react";
import "./user.scss";

export default function UserData() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(serializeData(data));
        console.log(data);
      });
  }, []);

  const serializeData = (data) => {
    return data.map((el) => {
      return {
        email: el.email,
        userName: el.username,
        password: el.password,
        firstName: el.name.firstname,
        lastName: el.name.lastname,
        city: el.address.city,
        street: el.address.street,
        number: el.address.number,
        zipcode: el.address.zipcode,
        lat: el.address.geolocation.lat,
        long: el.address.geolocation.long,
        phone: el.phone,
      };
    });
  };

  return (
    <div>
      {typeof data[0] !== "undefined" ? (
        <div>
          <p>{data[0].email}</p>
          <p>{data[0].userName}</p>
          <p>{data[0].lat}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
