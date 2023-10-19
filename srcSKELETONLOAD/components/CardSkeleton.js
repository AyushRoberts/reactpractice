import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => {
      return (
        <div className="card-skeleton" key={i}>
          <div className="left-col">
            <Skeleton circle width={40} height={40} />
          </div>
          <div className="right-col">
            <Skeleton count={4} />
          </div>
        </div>
      );
    });
};

export default CardSkeleton;
