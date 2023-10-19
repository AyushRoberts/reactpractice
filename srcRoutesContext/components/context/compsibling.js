import React from "react";
import { useCounter } from "./CountContext";

export default function COMPSIBLING() {
  const { count, setCount } = useCounter();
  return (
    <>
      <button onClick={() => setCount(count + 1)}></button>
      <div>COMPSIBLING {count}</div>
    </>
  );
}
