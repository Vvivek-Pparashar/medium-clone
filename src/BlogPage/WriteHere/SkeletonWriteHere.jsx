import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonWriteHere = () => {
  return (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
        }}
      >
        <Skeleton count={1} width="100%" height={20}/>
        <Skeleton count={1} width="30%" height={40} />
        <Skeleton count={1} width="100%" height={50} />
        <Skeleton count={1} width="30%" height={40} />
        <Skeleton count={1} width="100%" height={50} />
        <Skeleton count={1} width="30%" height={40} />
        <Skeleton count={1} width="100%" height={400} />
      </div>
  )
}

export default SkeletonWriteHere