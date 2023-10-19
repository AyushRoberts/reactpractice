import React, { useEffect, useState } from "react";
import Crd from "./Crd";
import { useNews } from "./FetchNewsContext";

const News = () => {
  const { fetchNews, news } = useNews();
  window.addEventListener("load", () => fetchNews("India"));

  return (
    <main>
      <div id="cardscont" className="cardscontainer container flex">
        <Crd items={news} />
      </div>
    </main>
  );
};

export default News;
