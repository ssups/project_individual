import React from "react";
import { Wrap, CardDescription, CardImg, CardStatus } from "./style";

const Card = ({ data }) => {
  const attackColor =
    data.attack >= 25 ? "gold" : data.attack < 25 && data.attack >= 15 ? "silver" : "black";
  const defColor = data.def >= 25 ? "gold" : data.def < 25 && data.def >= 15 ? "silver" : "black";
  const averageColor =
    data.average >= 25 ? "gold" : data.average < 25 && data.average >= 15 ? "silver" : "black";
  const rarityColor =
    data.rarity === "UltraRare" ? "gold" : data.rarity === "Rare" ? "silver" : "black";
  return (
    <Wrap style={{ backgroundColor: averageColor }}>
      <CardImg></CardImg>
      <CardDescription>
        <div>
          공격력:<span style={{ color: attackColor }}>{data.attack}</span>
        </div>
        <div>
          방어력:<span style={{ color: defColor }}>{data.def}</span>
        </div>
        <div style={{ width: "100px" }}>
          평균:<span style={{ color: averageColor }}>{data.average}</span>
        </div>
        <div>
          레어리티:<span style={{ color: rarityColor }}>{data.rarity}</span>
        </div>
      </CardDescription>
    </Wrap>
  );
};

export default Card;
