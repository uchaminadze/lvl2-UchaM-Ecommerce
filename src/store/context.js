import React, { useEffect, useState } from "react";

export const CreateContext = React.createContext({});

export const CreateContextProvider = ({ children }) => {
  let [data, setData] = useState({
    isLoggedin: false,
    userData: {},
  });

  return (
    <CreateContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};
