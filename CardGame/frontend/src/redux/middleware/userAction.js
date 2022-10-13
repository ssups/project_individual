import axios from "axios";

function join(id, nickName, pw, setSwitched) {
  return async (dispatch, getState) => {
    const { data: response } = await axios({
      method: "post",
      url: "http://localhost:4000/join",
      data: { id, nickName, pw },
    });
    console.log(response);
    if (response.success) {
      alert(response.msg);
      setSwitched(current => !current);
    } else {
      alert(response.msg);
    }
  };
}

export const userAction = { join };
