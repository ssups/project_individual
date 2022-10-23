import axios from "axios";

function getAllPosts() {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      url: "http://localhost:4000/get_all_posts",
    });
    dispatch({ type: "GET_ALL_POSTS", payload: response });
  };
}

function registerPost(id, title, main, setIsPosting) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/posting",
      data: { id, title, main },
    });
    alert(response.msg);
    if (response.msg === "등록 완료") {
      dispatch({ type: "GET_ALL_POSTS", payload: response.data });
      setIsPosting(false);
    }
  };
}

const postAction = { registerPost, getAllPosts };
export default postAction;
