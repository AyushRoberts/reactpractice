import React, { useEffect, useState } from "react";
import CharList from "./CharList";
import { Routes, Route } from "react-router-dom";
import SingleChar from "./SingleChar";
const Character = () => {
  const [loader, setloader] = useState(true);
  const [mainList, setMainList] = useState([]);
  const [charList, setChar] = useState([]);
  const [charDetails, setCharDetails] = useState([]);
  async function getChars() {
    const response = await fetch("https://genshin.jmp.blue/characters/");
    const chars = await response.json();
    setChar(chars);
  }
  const getCharDetails = () => {
    const newList = [];
    charList.forEach(async (e) => {
      const response = await fetch(`https://genshin.jmp.blue/characters/${e}`);
      const details = await response.json();
      newList.push({ key: e, ...details });
      setCharDetails([...newList]);
      setMainList([...newList]);
      setloader(false);
    });
  };

  useEffect(() => {
    getChars();
  }, []);
  useEffect(() => {
    getCharDetails();
  }, [charList]);
  const filterByElement = (e) =>
    setCharDetails(mainList.filter((char) => char.vision === e));
  return (
    <>
      <div className="charlist">
        <Routes>
          <Route
            path="/"
            element={
              <CharList
                setCharDetails={setCharDetails}
                mainList={mainList}
                filterByElement={filterByElement}
                loader={loader}
                charDetails={charDetails}
              />
            }
          />
          <Route
            path="/:key"
            element={<SingleChar charDetails={charDetails} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default Character;
