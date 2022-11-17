const init = {
  userId: null,
  isLogined: false,
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "LOGIN":
      return { ...state, userId: payload.userId, isLogined: true };

    default:
      return state;
  }
}

export default reducer;
