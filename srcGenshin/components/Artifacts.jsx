import Modal from "./Modal";
import React, { useEffect, useState } from "react";

const Artifacts = () => {
  const [loader, setloader] = useState(true);
  const [modtitle, setmodtitle] = useState();
  const [moddesc, setmoddesc] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [artiList, setArti] = useState([]);
  const [artiDetails, setArtiDetails] = useState([]);
  async function getArtis() {
    const response = await fetch("https://genshin.jmp.blue/artifacts/");
    const artifs = await response.json();
    setArti(artifs);
  }
  const getArtiDetails = () => {
    const newList = [];
    artiList.forEach(async (e) => {
      const response = await fetch(`https://genshin.jmp.blue/artifacts/${e}`);
      const details = await response.json();
      newList.push({ key: e, ...details });
      setArtiDetails([...newList]);
      setloader(false);
    });
  };

  useEffect(() => {
    getArtis();
  }, []);
  useEffect(() => {
    getArtiDetails();
  }, [artiList]);
  const mod = (title, twoP) => {
    setmodtitle(title);
    setmoddesc(twoP);
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen && (
        <Modal
          moddesc={moddesc}
          modtitle={modtitle}
          setModalOpen={setModalOpen}
        />
      )}
      {loader ? (
        <div className="loadtext">loading</div>
      ) : (
        <div className="artimaincont">
          {artiDetails.map((e) => {
            const img1 = `https://genshin.jmp.blue/artifacts/${e.key}/circlet-of-logos`;
            const img2 = `https://genshin.jmp.blue/artifacts/${e.key}/flower-of-life`;
            const img3 = `https://genshin.jmp.blue/artifacts/${e.key}/goblet-of-eonothem`;
            const img4 = `https://genshin.jmp.blue/artifacts/${e.key}/plume-of-death`;
            const img5 = `https://genshin.jmp.blue/artifacts/${e.key}/sands-of-eon`;
            const { name } = e;
            const twoP = e["2-piece_bonus"];
            const fourP = e["4-piece_bonus"];
            return (
              <>
                {loader ? (
                  <div className="loadtext">loading</div>
                ) : (
                  <div className="articont flex" key={e.key}>
                    <div className="artiimgcont flex">
                      <img loading="lazy" src={img1} alt={`${name} Icon`} />
                      <img loading="lazy" src={img2} alt={`${name} Icon`} />
                      <img loading="lazy" src={img3} alt={`${name} Icon`} />
                      <img loading="lazy" src={img4} alt={`${name} Icon`} />
                      <img loading="lazy" src={img5} alt={`${name} Icon`} />
                    </div>
                    <div className="artitextcont flex">
                      <div className="artiname flex centerflex">{name}</div>
                      <div className="twop centerflex flex">
                        <button
                          onClick={() => mod("TWO PIECE BONUS", twoP)}
                          className="twopbut bonusbut"
                        >
                          2P
                        </button>
                      </div>
                      <div className="fourp centerflex flex">
                        <button
                          onClick={() => mod("FOUR PIECE BONUS", fourP)}
                          className="fourpbut bonusbut"
                        >
                          4P
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Artifacts;
