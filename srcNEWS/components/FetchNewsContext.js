import React, { createContext, useContext, useState } from "react";
const FetchNewsContext = createContext();
export const useNews = () => useContext(FetchNewsContext);
const FetchNewsContextProvider = (props) => {
  const apikey = "c96bab30e6a543d38269df7e0b6e62f7";
  const url = "https://newsapi.org/v2/everything?q=";
  const [news, setNews] = useState([]);
  async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${apikey}`);
    const data = await res.json();
    const a = data.articles;
    setNews(
      a.filter((e) => {
        return e.urlToImage;
      })
    );
  }
  return (
    <FetchNewsContext.Provider value={{ fetchNews, news }}>
      {props.children}
    </FetchNewsContext.Provider>
  );
};

export default FetchNewsContextProvider;
