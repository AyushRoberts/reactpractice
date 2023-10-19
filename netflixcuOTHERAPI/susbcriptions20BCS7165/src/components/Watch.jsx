import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/logo.png";
import ShowPopupModal from "./ShowPopupModal";
import { Link, useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { logout } from "../firebase";
const Watch = () => {
  const n = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBar, setSearchBar] = useState(false);
  const [searchResults, setSearchResults] = useState();
  const [suggestions, setSuggestions] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState();
  const [loaded, setLoaded] = useState(false);
  const getnf = async (searchTerm) =>
    await axios
      .get("http://localhost:3000/fetchNetflix", {
        headers: {
          searchTerm: searchTerm,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSearchResults(response.data);
        // setSuggestions(response.data);
        setLoaded(true);
      });

  const showhandle = (id) => {
    n(`${id}`);
  };

  useEffect(() => {
    getnf("");
  }, []);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img className="logoimg" src={img} alt="" />
        </div>
        <ul className="navlist">
          {/* <li
            className="navitem"
            onClick={() => {
              setSearchBar(!searchBar);
            }}
          >
            Search
          </li> */}
          <Link to="/player" className="navitem">
            Upload
          </Link>
          <Link className="navitem" to="/manage">
            Manage Plan
          </Link>
          <li onClick={logout} className="navitem">
            Logout
          </li>
        </ul>
        <div
          id="searchCont"
          style={searchBar ? { display: "inline" } : { display: "none" }}
          className="searchCont"
        >
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchBar"
          />
          <button
            onClick={() => {
              setLoaded(false);
              getnf(searchTerm);
            }}
          >
            search
          </button>
        </div>
      </div>
      {showModal && (
        <ShowPopupModal setShowModal={setShowModal} currentShow={selected} />
      )}
      <div className="watchmaincont">
        {loaded ? (
          <div className="contentrow">
            {searchResults &&
              searchResults.map((item) => {
                return (
                  <div
                    // style={{
                    //   backgroundImage: `url(${item.img})`,
                    //   backgroundSize: "contain",
                    // }}
                    // onMouseEnter={(e) =>
                    //   (e.target.style = `background-image:url(${item.img});background-size:cover`)
                    // }
                    // onMouseLeave={(e) =>
                    //   (e.target.style.backgroundSize = `contain`)
                    // }
                    className="showbox"
                    onClick={() => {
                      setShowModal(true);
                      setSelected(item);
                      showhandle(item.nfid);
                    }}
                  >
                    {item.img != undefined ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="showpic"
                      />
                    ) : (
                      item.jawSummary.title
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          <center>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton count={6} width={"75%"} height={"100px"} />
            </SkeletonTheme>
          </center>
        )}

        {/* {searchResults &&
          suggestions.map((item) => {
            return <div>{item.summary.name}</div>;
          })} */}
        <div className="footer">footer</div>
      </div>
    </>
  );
};

export default Watch;
