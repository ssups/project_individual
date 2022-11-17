const init = {
  allPosts: [],
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "ADD_POST":
      return { ...state, allPosts: payload.addedAllPosts };

    case "GET_ALL_POSTS":
      return { allPosts: payload.allPosts };

    default:
      return state;
  }
}

export default reducer;
