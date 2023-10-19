import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import PersonIcon from "@mui/icons-material/Person";
import {
  Add,
  Chat,
  FavoriteRounded,
  Notifications,
  QuestionMark,
} from "@mui/icons-material";
import { useEffect } from "react";
import Pin from "./components/Pin";
const App = () => {
  useEffect(() => {
    const allIcons = document.querySelectorAll(".iconCont");
    function setActive() {
      allIcons.forEach((icon) => icon.classList.remove("active"));
      this.classList.add("active");
    }
    allIcons.forEach((icon) => {
      icon.addEventListener("click", setActive);
    });
  }, []);
  return (
    <>
      <div className="App">
        <div className="menuCont">
          <img
            src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5be01d787b5e5b0001ebb6bb/0x0.png"
            alt=""
            className="logo"
          />
          <div className="submenu">
            <div>
              <Menu icon={<PersonIcon />} />
              <Menu icon={<Notifications />} />
              <Menu icon={<Chat />} />
            </div>
            <div>
              <Menu icon={<FavoriteRounded />} />
            </div>
            <div>
              <Menu icon={<QuestionMark />} />
              <Menu icon={<Add />} />
            </div>
          </div>
        </div>
        <main>
          <div className="search">
            <input type="text" placeholder="Search..." />
            <div className="searchicon">
              <img src="" alt="" />
            </div>
          </div>
          <div className="maincont">
            <Pin pinsize={"small"} />
            <Pin pinsize={"med"} />
            <Pin pinsize={"large"} />
            <Pin pinsize={"small"} />
            <Pin pinsize={"med"} />
            <Pin pinsize={"large"} />
            <Pin pinsize={"small"} />
            <Pin pinsize={"med"} />
            <Pin pinsize={"large"} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
