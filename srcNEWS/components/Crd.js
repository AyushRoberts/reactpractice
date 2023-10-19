import React from "react";
const Crd = (props) => {
  return (
    <>
      {props.items.map((e, i) => {
        const newsImg = e.urlToImage;
        const newstitle = e.title;
        const newssrc = e.source.name;
        const newsdesc = e.description;
        const date = new Date(e.publishedAt).toLocaleString("en-US", {
          timeZone: "Asia/Jakarta",
        });
        return (
          <div
            className="card"
            key={i}
            onClick={() => {
              window.open(e.url, "_blank");
            }}
          >
            <div className="cardhead">
              <img src={newsImg} alt="" id="newsimg" />
            </div>
            <div className="cardcontent">
              <h3 id="newstitle">{newstitle}</h3>
              <h6 className="newssrc" id="newssrc">
                {newssrc} {date}
              </h6>
              <p className="newsdesc" id="newsdesc">
                {newsdesc}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Crd;
