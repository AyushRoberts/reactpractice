import React, { useEffect, useState } from "react";
import { useNews } from "./FetchNewsContext";
const Navbar = () => {
  const { fetchNews } = useNews();
  const [selected, setSel] = useState(null);
  function onNavClick(q) {
    fetchNews(q);
    const nav = document.getElementById(q);
    selected?.classList.remove("active");
    setSel(nav);
  }
  useEffect(() => {
    selected?.classList.add("active");
  }, [selected]);
  const text = document.getElementById("inputtext");
  const searcher = () => {
    const q = text.value;
    if (!q) return;
    fetchNews(q);
    selected?.classList.remove("active");
    setSel(null);
  };

  const reload = () => {
    window.location.reload();
  };
  const img = require("../assets/logo.png");
  return (
    <nav>
      <div className="mainnav container flex">
        <a onClick={() => reload()} href="#">
          <img className="logo" src={img} alt="" />
        </a>
        <div className="navlinks">
          <ul className="flex">
            <li
              id="ipl"
              className="hover-link navitems"
              onClick={() => onNavClick("ipl")}
            >
              IPL
            </li>
            <li
              id="politics"
              onClick={() => onNavClick("politics")}
              className="hover-link navitems"
            >
              Politics
            </li>
          </ul>
        </div>
        <div className="searchbar flex">
          <input
            id="inputtext"
            placeholder="eg. Cars"
            type="text"
            className="newsinput"
          />
          <button onClick={() => searcher()} className="search" id="searchbut">
            search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
