const init = {
  allPosts: [],
};

function reducer(state = init, { type, payload }) {
  switch (type) {
    case "GET_ALL_POSTS":
      const sorted = payload.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      // 이런식으로 스프레드로 안적고 그냥 sorted 배열 자체를 넣어버리면 값이 바뀐지 인지못함
      return { ...state, allPosts: [...sorted] };
    case "SORT_POSTS_BY_OLD":
      const oldOrder = state.allPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      return { ...state, allPosts: [...oldOrder] };
    case "SORT_POSTS_BY_NEW":
      const newOrder = state.allPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return { ...state, allPosts: [...newOrder] };
    default:
      return state;
  }
}

export default reducer;
