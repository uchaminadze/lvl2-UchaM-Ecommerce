// import React, { useEffect, useState } from "react";

// export const CreateContext = React.createContext({});

// export const CreateContextProvider = ({ children }) => {
//   let [data, setData] = useState({
//     isLoggedin: false,
//     userData: {},
//   });

//   return (
//     <CreateContext.Provider
//       value={{
//         data,
//         setData,
//       }}
//     >
//       {children}
//     </CreateContext.Provider>
//   );
// };

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunkMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
