// import React, { useEffect, useState } from "react";
// import Character from "./Character";

// const Genshin = () => {
//   const [charList, setChar] = useState([]);
//   const [charDetails, setCharDetails] = useState([]);
//   async function getChars() {
//     const response = await fetch("https://api.genshin.dev/characters/");
//     const chars = await response.json();
//     setChar(chars);
//   }
//   async function getCharDetails() {
//     for (let e of charList) {
//       const response = await fetch(`https://api.genshin.dev/characters/${e}`);
//       const details = await response.json();
//       console.log(details);
//       setCharDetails([...charDetails, details.name]);
//     }
//   }
//   useEffect(() => {
//     getChars();
//     getCharDetails();
//   }, []);
//   return (
//     <>
//       {charDetails.map((c, i) => {
//         console.log(i);
//         const { name, vision } = c;
//         return (
//           <div className="charcont">
//             <div className="imagecont">
//               <img src="" alt="" />
//             </div>
//             <div className="textcont">
//               <div className="name">{name}</div>
//               <div className="charelement">{vision}</div>
//             </div>
//           </div>
//         );
//       })}
//       <Character chardata={charList} />
//     </>
//   );
// };

// export default Genshin;
