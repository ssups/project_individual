import React from "react";
import { Wrap, Title } from "./style";

const Board = ({ name }) => {
  return (
    <div>
      <Title>{name}</Title>
      <Wrap></Wrap>
    </div>
  );
};

export default Board;
