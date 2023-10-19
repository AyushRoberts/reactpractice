import React from "react";
import { useCounter } from "./CountContext";

const COMPCHILD = () => {
  const { count } = useCounter();
  return <div>COMPCHILD {count}</div>;
};

export default COMPCHILD;
