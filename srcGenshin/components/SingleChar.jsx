import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleChar = (props) => {
  const nav = useNavigate();
  const { key } = useParams();
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setloader(false);
  }, [props.charDetails]);
  try {
    const {
      name,
      title,
      vision,
      weapon,
      nation,
      affiliation,
      rarity,
      constellation,
      birthday,
      description,
      skillTalents,
      passiveTalents,
      constellations,
    } = props.charDetails.find((e) => {
      return e.key === key;
    });
    const bday = birthday.substring(5);
    const url = `https://genshin.jmp.blue/characters/${key}/gacha-card`;
    return (
      <>
        {loader ? (
          <div className="loadtext">loading</div>
        ) : (
          <div className="singlecharcont flex">
            <button className="closebut" onClick={() => nav("/")}>
              ←
            </button>
            <div className="imagecontSingle">
              <img loading="lazy" src={url} alt={key} />
            </div>
            <div className="textcontSingle">
              <div className="nameSingle">{name}</div>
              <div className="titleSingle">{title}</div>
              <div className="nationSingle">{nation}</div>
              <div className="visionSingle">{vision}</div>
              <div className="weaponSingle">{weapon}</div>
              <div className="affiliationSingle">{affiliation}</div>
              <div className="raritySingle">{rarity}</div>
              <div className="bdaySingle">{bday}</div>
              <div className="constellationSingle">{constellation}</div>
              <div className="descriptionSingle">{description}</div>
            </div>
          </div>
        )}
      </>
    );
  } catch (e) {}
};

export default SingleChar;
