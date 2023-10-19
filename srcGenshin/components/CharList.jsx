import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CharList = ({
  charDetails,
  loader,
  filterByElement,
  mainList,
  setCharDetails,
}) => {
  return (
    <>
      <ul className="visionfilter flex">
        <li>
          <a href="#" onClick={() => setCharDetails(mainList)}>
            All
          </a>
        </li>
        <li>
          <a href="#" onClick={() => filterByElement("Electro")}>
            Electro
          </a>
        </li>
        <li>
          <a href="#" onClick={() => filterByElement("Dendro")}>
            Dendro
          </a>
        </li>
        <li>
          <a href="#" onClick={() => filterByElement("Cryo")}>
            Cryo
          </a>
        </li>
        <li>
          <a href="#" onClick={() => filterByElement("Pyro")}>
            Pyro
          </a>
        </li>
        <li>
          <a href="#" onClick={() => filterByElement("Geo")}>
            Geo
          </a>
        </li>
        <li>
          <a href="#" onClick={() => filterByElement("Anemo")}>
            Anemo
          </a>
        </li>
        <li>
          <a href="#" onClick={() => filterByElement("Hydro")}>
            Hydro
          </a>
        </li>
      </ul>
      {loader ? (
        <div className="loadtext">loading</div>
      ) : (
        <div className="charbox flex">
          {charDetails.map((e) => {
            if (e.key) {
              const imgurl =
                e.key.indexOf("traveler") != -1
                  ? `https://genshin.jmp.blue/characters/${e.key}/icon`
                  : `https://genshin.jmp.blue/characters/${e.key}/icon-big`;
              const { name, vision, rarity } = e;
              return (
                <>
                  <Link to={`/${e.key}`} state={{ fromHome: true }}>
                    <div className="charcont flex" key={e.key}>
                      <div className="imagecont ">
                        <img loading="lazy" src={imgurl} alt={`${name} Icon`} />
                      </div>
                      <div className="textcont">
                        <div className="name">{name}</div>
                        <div className="vision">{vision}</div>
                        <div className="charrarity">{rarity}</div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default CharList;
