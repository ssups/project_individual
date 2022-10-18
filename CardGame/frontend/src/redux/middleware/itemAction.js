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

export const itemAction = { openCardPack };
