import axios from "axios";

function openCardPack(id, amount) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/open_card_pack",
      data: { id },
    });
    // console.log(response);
    // dispatch()
  };
}
function getUserCards(id) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/get_user_cards",
      data: { id },
    });
    console.log(response);
    dispatch({ type: "GET_USER_CARDS", payload: { id, data: response } });
  };
}

export const itemAction = { openCardPack, getUserCards };
