import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import FetchNewsContextProvider from "./components/FetchNewsContext";
import "./App.css";
const App = () => {
  return (
    <>
      <FetchNewsContextProvider>
        <Navbar />
        <News />
      </FetchNewsContextProvider>
    </>
  );
};

export default App;
