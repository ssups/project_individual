import React, { useEffect, useRef, useState } from "react";
import { Whole, Wrap, Attribute, Button, CardWrap, CardDescription, CardStatusWrap } from "./style";
import { itemAction } from "../../redux/middleware/itemAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PopUp = ({ purpose, setPopUp, popUpSvg, play, cardData }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const loginUserId = useSelector(state => state.loginReducer.id);
  const buyAmount = useRef();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (purpose === "shop") setTotalPrice(popUpSvg.props["data-price"] * 1);
  }, []);

  if (cardData) {
    var attackColor =
      cardData.attack >= 25
        ? "gold"
        : cardData.attack < 25 && cardData.attack >= 15
        ? "silver"
        : "black";
    var defColor =
      cardData.def >= 25 ? "gold" : cardData.def < 25 && cardData.def >= 15 ? "silver" : "black";
    var averageColor =
      cardData.average >= 25
        ? "gold"
        : cardData.average < 25 && cardData.average >= 15
        ? "silver"
        : "black";
    var rarityColor =
      cardData.rarity === "UltraRare" ? "gold" : cardData.rarity === "Rare" ? "silver" : "black";
  }
  // console.log(popUpSvg);
  function closePopUp(e) {
    if (e.target.dataset.for === "backGround") {
      setPopUp(false);
      if (play) play();
    }
  }
  function onInput(e) {
    const targetSvg = e.target.parentNode.parentNode.parentNode.children[0];
    setTotalPrice(buyAmount.current.value * 1 * targetSvg.dataset.price * 1);
  }
  function openItem(e) {
    // console.log(e.target.parentNode.children[0].dataset.item);
    const targetSvg = e.target.parentNode.children[0];
    switch (targetSvg.dataset.item) {
      case "cardPack":
        console.log("카드팩 열기");
        dispatch(itemAction.openCardPack(loginUserId, setPopUp));
        break;
      case "point_5000":
        console.log("5000포인트팩 열기");
        dispatch(itemAction.openPointPack(loginUserId, setPopUp, 5000));
        break;
      default:
        break;
    }
  }
  function buyItem(e) {
    const targetSvg = e.target.parentNode.parentNode.children[0];
    // dispatch(loginUserId, setPopUp, targetSvg.dataset.item, buyAmount.current.value);
    buyAmount.current.value = 1;
  }
  useEffect(() => {
    // popUpSvg.props.style.width = "300px";
    // console.log(popUpSvg.props);
  }, [popUpSvg]);
  // console.log(popUpSvg.props.style.width);
  return (
    <Whole onClick={closePopUp} data-for="backGround">
      <Wrap>
        {purpose === "inventory" ? (
          <>
            {popUpSvg}
            <Button onClick={openItem}>개봉</Button>
          </>
        ) : null}
        {purpose === "shop" ? (
          <>
            {popUpSvg}
            <Attribute>
              <div>
                <label htmlFor="amount">수량: </label>
                <input
                  type="number"
                  id="amount"
                  defaultValue={1}
                  ref={buyAmount}
                  onInput={onInput}
                  min={1}
                  max={10}
                />
              </div>
              <Button onClick={buyItem}>{totalPrice.toLocaleString()}원 구매</Button>
            </Attribute>
          </>
        ) : null}
        {purpose === "card" ? (
          <CardWrap style={{ backgroundColor: averageColor, width: "100%", height: "100%" }}>
            <div
              src=""
              alt=""
              style={{
                width: "90%",
                height: "300px",
                border: "1px solid black",
                backgroundColor: "white",
              }}
            ></div>
            <CardDescription>
              <CardStatusWrap>
                <span>
                  공격력:<span style={{ color: attackColor }}>{cardData.attack}</span>
                </span>
                <span>
                  방어력:<span style={{ color: defColor }}>{cardData.def}</span>
                </span>
              </CardStatusWrap>
              <CardStatusWrap>
                <span>
                  평균:<span style={{ color: averageColor }}>{cardData.average}</span>
                </span>
                <span>
                  레어리티:<span style={{ color: rarityColor }}>{cardData.rarity}</span>
                </span>
              </CardStatusWrap>
            </CardDescription>
          </CardWrap>
        ) : null}
      </Wrap>
    </Whole>
  );
};

export default PopUp;
