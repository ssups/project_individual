import React, { useEffect } from "react";
import { Whole, Wrap, Button } from "./style";
import { itemAction } from "../../redux/middleware/itemAction";
import { useDispatch, useSelector } from "react-redux";

const PopUp = ({ setPopUp, popUpSvg }) => {
  const dispatch = useDispatch();
  const loginUserId = useSelector(state => state.loginReducer.id);
  // console.log(popUpSvg);
  function closePopUp(e) {
    if (e.target.dataset.for === "backGround") {
      setPopUp(false);
    }
  }
  function openItem(e) {
    // console.log(e.target.parentNode.children[0].dataset.item);
    switch (e.target.parentNode.children[0].dataset.item) {
      case "cardPack":
        console.log("카드팩");
        dispatch(itemAction.openCardPack(loginUserId, setPopUp));

        break;

      default:
        break;
    }
  }
  useEffect(() => {
    // popUpSvg.props.style.width = "300px";
    // console.log(popUpSvg.props);
  }, [popUpSvg]);
  // console.log(popUpSvg.props.style.width);
  return (
    <Whole onClick={closePopUp} data-for="backGround">
      <Wrap>
        {popUpSvg}
        <Button onClick={openItem}>개봉</Button>
      </Wrap>
    </Whole>
  );
};

export default PopUp;
