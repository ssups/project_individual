import React from "react";
import { loadingImg } from "../images";

const Loading = () => {
  return (
    <div>
      <img src={loadingImg} style={{ height: "100vh", width: "100vw" }} alt="" />
    </div>
  );
};

export default Loading;
