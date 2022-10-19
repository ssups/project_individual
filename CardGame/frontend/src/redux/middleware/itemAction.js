import axios from "axios";
import { userAction } from "./userAction";

function openCardPack(id, setPopUp) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/open_card_pack",
      data: { id },
    });
    alert(response);
    dispatch(userAction.getUserCards(id));
    dispatch(userAction.getUserItems(id));
    setPopUp(false);
  };
}
function openPointPack(id, setPopUp, amount) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/open_point_pack",
      data: { id, amount },
    });
    alert(response);
    dispatch(userAction.getUserItems(id));
    dispatch({ type: "UPDATE_USER_POINT", payload: amount });
    setPopUp(false);
  };
}
function buyItem(id, setPopUp, item, buyAmount) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "",
    });
  };
}

export const itemAction = { openCardPack, openPointPack };
