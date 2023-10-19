import React, { useEffect, useState } from "react";

const Enemies = () => {
  const [loader, setloader] = useState(true);
  const [enemyList, setenemy] = useState([]);
  const [enemyDetails, setenemyDetails] = useState([]);
  async function getenemies() {
    const response = await fetch("https://genshin.jmp.blue/enemies/");
    const enemies = await response.json();
    setenemy(enemies);
  }
  const getEnemyDetails = () => {
    const newList = [];
    enemyList.forEach(async (e) => {
      const response = await fetch(`https://genshin.jmp.blue/enemies/${e}`);
      const details = await response.json();
      newList.push({ key: e, ...details });
      setenemyDetails([...newList]);
      setloader(false);
    });
  };

  useEffect(() => {
    getenemies();
  }, []);
  useEffect(() => {
    getEnemyDetails();
  }, [enemyList]);
  return (
    <>
      <div className="charlist">
        {loader ? (
          <div className="loadtext">loading</div>
        ) : (
          <div className="charbox flex">
            {enemyDetails.map((e) => {
              const imgurl = `https://genshin.jmp.blue/enemies/${e.key}/icon`;
              const { name, vision, rarity } = e;
              return (
                <>
                  <div className="charcont flex" key={e.key}>
                    <div className="imagecont ">
                      <img src={imgurl} alt={`${name} Icon`} />
                    </div>
                    <div className="textcont enemy centerflex flex">
                      <div className="name">{name}</div>
                      <div className="vision">{vision}</div>
                      <div className="charrarity">{rarity}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Enemies;
