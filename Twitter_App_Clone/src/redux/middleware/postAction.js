import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@posts";

function getAllPosts() {
  return async (dispatch, state) => {
    try {
      const temp = await AsyncStorage.getItem(STORAGE_KEY);
      if (temp) {
        const allPosts = JSON.parse(temp);
        dispatch({ type: "GET_ALL_POSTS", payload: { allPosts } });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

function addPost(allPosts, postId, writer, text) {
  const addedAllPosts = [...allPosts, { postId, writer, text }];
  return async (dispatch, state) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(addedAllPosts));
      dispatch({ type: "ADD_POST", payload: { addedAllPosts } });
    } catch (err) {
      console.log(err);
    }
  };
}

export default { getAllPosts, addPost };
