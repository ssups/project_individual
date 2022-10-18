const init = {
  default: "dfer",
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "GET_USER_CARDS":
      state[payload.id] = payload.data;
      // 여기서 그냥 return state 해버리면 새로운 원소가 추가된 객체를 return시키지 못하는 경우가 발생함
      return { ...state };
    case "UPDATE_USER_CARDS":
      return;

    default:
      return state;
  }
}

export default reducer;
