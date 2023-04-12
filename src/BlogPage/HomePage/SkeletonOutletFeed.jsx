import React from "react";
import "./Card/Card.css";
import "./SkeletonOutletFeed.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonOutletFeed = () => {
  return (
    <div className="mb-card" style={{ width: "100%" }} key={98999}>
      {/* Author Details */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Skeleton width={40} height={40} circle />
        <Skeleton width={90} height={10} />
        <Skeleton width={90} height={10} />
      </div>

      {/* End of author details */}

      {/* Starting of main content */}
      <div className="mb-card-c" style={{ gap: "20px" }}>
        <div className="mb-card-l">
          <Skeleton className="sk-hd" style={{ width: "100%" }} />
          {window.innerWidth >= 750 ? (
            <Skeleton className="sk-hd" style={{ width: "100%", marginTop:"20px" }} />
          ) : (
            <></>
          )}

          <div className="mb-card-l-bottom">
            <Skeleton className="sk-btm" />
            <Skeleton className="sk-btm" />
            <Skeleton className="sk-btm" />
          </div>
        </div>
        <div className="mb-card-r">
          <Skeleton className="mb-card-r-img" />
        </div>
      </div>
      {/* Ending of main content */}
    </div>
  );
};

export default SkeletonOutletFeed;
