import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {}, []);
  return <div className="contents">Main</div>;
};

export default Main;
