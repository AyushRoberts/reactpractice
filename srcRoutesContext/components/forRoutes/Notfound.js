import React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Notfound = () => {
  const nv = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      nv("/"); //or -1 -2
    }, 1000);
  }, []);
  return <div>Notfound</div>;
};

export default Notfound;
