const init = {
  allPosts: [],
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "GET_ALL_POSTS":
      return { ...state, allPosts: payload };

    default:
      return state;
  }
}

export default reducer;
