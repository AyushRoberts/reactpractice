//import React from 'react'
import "./style.css";
import Menu from "./menuApi";
import { useState } from "react";
import MenuCard from "../MenuCard";
import Navbar from "./Navbar";

const cat = [
  ...new Set(
    Menu.map((e) => {
      return e.category;
    })
  ),
  "All",
];
const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [catList, setcat] = useState(cat);

  const filterItem = (categroy) => {
    if (categroy === "All") {
      setMenuData(Menu);
      return;
    }
    const filteredList = Menu.filter((e) => {
      return e.category === categroy;
    });
    setMenuData(filteredList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} cat={catList} />
      <MenuCard menuD={menuData} />
    </>
  );
};

export default Restaurant;
