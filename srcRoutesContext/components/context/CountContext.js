import React, { createContext, useContext, useState } from "react";
export const CountContext = createContext();
export const useCounter = () => useContext(CountContext);
const CountContextProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {props.children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
