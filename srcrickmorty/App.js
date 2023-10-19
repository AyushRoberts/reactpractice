import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

const App = () => {
  let [pageNo, setPageNo] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [search, setSearch] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNo}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        <b>
          Rick & Morty <span className="text-primary">WiKi</span>
        </b>
      </h1>
      <Search setPageNo={setPageNo} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} page={pageNo} setPage={setPageNo} />
    </div>
  );
};

export default App;
