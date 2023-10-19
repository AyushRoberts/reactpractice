import React, { useEffect, useState } from "react";
import Character from "./Character";
import Artifacts from "./Artifacts";
import Enemies from "./Enemies";
import Bgswitch from "./Bgswitch";
const GenshinTest = () => {
  const [loader, setloader] = useState(true);
  const [component, setComp] = useState(<Character />);

  return (
    <>
      <div className="maincont">
        <ul className="switchlist flex">
          <li>
            <a href="#" onClick={() => setComp(<Character />)}>
              Characters
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setComp(<Artifacts loader={setloader} />)}
            >
              Artifacts
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setComp(<Enemies loader={setloader} />)}>
              Enemies
            </a>
          </li>
        </ul>
        {component}
        <Bgswitch />
      </div>
    </>
  );
};

export default GenshinTest;
