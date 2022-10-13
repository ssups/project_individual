import axios from "axios";

function login(id, pw, move) {
  return async (dispatch, getState) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/login",
      data: { id, pw },
    });
    if (response.success) {
      alert(response.msg);
      //   console.log(response.data);
      dispatch({ type: "LOGIN", payload: response.data });
      move();
    } else alert(response.msg);
  };
}

function loginCheck() {
  console.log("로그인 첵 실행");
  return async (dispatch, getState) => {
    const { data: response } = await axios({
      url: "http://localhost:4000/loginCheck",
    });
    console.log(response);
  };
}

export const loginAction = { login, loginCheck };
