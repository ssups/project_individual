const init = {
  userId: "dfer",
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "GET_USER_CARDS":
      state[payload.id] = payload.data;
      return state;
    case "UPDATE_USER_CARDS":
      return;

    default:
      return state;
  }
}

export const cardReducer = reducer;
