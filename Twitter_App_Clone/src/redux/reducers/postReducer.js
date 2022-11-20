const init = {
  allPosts: [],
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "UPDATE_POST":
      return { ...state, allPosts: payload.updatedAllPosts.reverse() };

    case "GET_ALL_POSTS":
      return { allPosts: payload.allPosts.reverse() };

    default:
      return state;
  }
}

export default reducer;
