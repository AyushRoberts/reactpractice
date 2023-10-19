import React from "react";

const Bgswitch = () => {
  const switcher = (url) => {
    const body = document.getElementById("body");
    body.style.background = `url(${url}) no-repeat`;
    body.style.backgroundSize = "100vw 100vh";
  };
  return (
    <div className="bgswitch flex">
      {/* <button
            onClick={() =>
              switcher(
                "https://repository-images.githubusercontent.com/534584713/c8f02e21-7b11-4664-b2bf-28e5292bb33e"
              )
            }
            className="bgbutton"
          ></button> */}
      <div className="bgimglist flex">
        <button
          className="bglistimg"
          onClick={() =>
            switcher("https://images2.alphacoders.com/131/1317068.png")
          }
        >
          <img src="https://images2.alphacoders.com/131/1317068.png" alt="" />
        </button>
        <button
          onClick={() =>
            switcher("https://images4.alphacoders.com/129/1297318.jpg")
          }
          className="bglistimg"
        >
          <img src="https://images4.alphacoders.com/129/1297318.jpg" alt="" />
        </button>
        <button
          onClick={() =>
            switcher("https://images2.alphacoders.com/131/1317265.png")
          }
          className="bglistimg"
        >
          <img src="https://images2.alphacoders.com/131/1317265.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Bgswitch;
