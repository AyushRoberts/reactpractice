import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ShowPopupModal = ({ setShowModal }) => {
  const params = useParams();
  const id = params.id;
  const n = useNavigate();
  const [currentShow, setCurrentShow] = useState();
  const [loading, setLoading] = useState(true);
  const getshowdet = async (id) =>
    await axios
      .get("http://localhost:3000/fetchshowdet", {
        headers: {
          id: id,
        },
      })
      .then((response) => {
        console.log(response.data);
        setCurrentShow(response.data);
        setLoading(false);
      });
  const closemodal = () => {
    setShowModal(false);
    n("/watch");
  };
  useEffect(() => {
    getshowdet(id);
  }, []);
  return loading ? (
    <Skeleton />
  ) : (
    <div className="modalmaincont" onClick={closemodal}>
      <div
        className="modalmainbox"
        id="modalmainbox"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="modalclosebut" onClick={closemodal}>
          X
        </button>

        <div
          className="modalboximg"
          style={{
            backgroundImage: `url(${currentShow.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {currentShow.img != undefined ? (
            <img
              src={currentShow.img}
              alt={currentShow.img}
              className="modallogopic"
            />
          ) : (
            currentShow.title
          )}
        </div>
        <Link to="/player" className="playbut">
          Play
        </Link>
        <div className="showdetails">
          <div className="leftdet">
            <div className="lefttop">
              {
                /* {(() => {
                const d = new Date(
                  currentShow.availability.availabilityStartTime
                );
                return d.getFullYear() + " ";
              })()} */ currentShow.year + " "
              }
              {currentShow.vtype}
              <br />
              {/* {currentShow.jawSummary.tags.map((e) => {
                return e.name + ", ";
              })} */}
            </div>
            <div className="leftbot">
              {(() => {
                var txt = document.createElement("textarea");
                txt.innerHTML = currentShow.synopsis;
                return txt.value;
              })()}
            </div>
          </div>
          <div className="rightdet">
            <div className="cast">
              {currentShow.matlabel}
              {/* Cast:{" "} */}
              {/* {currentShow.jawSummary.cast.slice(0, 3).map((e) => {
                return e.name + ", ";
              })}{" "} */}
              {/* more... */}
            </div>
            <div className="genre">
              Genre: {currentShow.imdbgenre}
              {/* {currentShow.jawSummary.genres.map((e) => {
                return e.name + ", ";
              })} */}
            </div>
          </div>
        </div>
        <div className="showepisodes">Episodes</div>
      </div>
    </div>
  );
};

export default ShowPopupModal;
