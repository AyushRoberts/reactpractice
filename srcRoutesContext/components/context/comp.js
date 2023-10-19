import React, { useContext } from "react";
import { CountContext } from "./CountContext";
import COMPCHILD from "./compchild";
const AA = () => {
  const { count } = useContext(CountContext);
  return (
    <div>
      COMP1 {count} <br />
      <COMPCHILD />
    </div>
  );
};

export default AA;
