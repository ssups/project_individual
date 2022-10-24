import axios from "axios";

function getComments(postId) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/get_comments",
      data: { postId },
    });
    dispatch({ type: "SET_POP_UP_POST_COMMENTS", payload: response });
  };
}

function registerComment(postId, userId, text) {
  return async (dispatch, state) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/register_comments",
      data: { postId, userId, text },
    });
    alert(response.msg);
    if (response.msg === "등록 완료") {
      dispatch({ type: "SET_POP_UP_POST_COMMENTS", payload: response.data });
    }
  };
}

const commetAction = { getComments, registerComment };
export default commetAction;
