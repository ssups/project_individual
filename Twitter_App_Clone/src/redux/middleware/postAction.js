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

function addPost(allPosts, postId, writer, text, navigation) {
  const updatedAllPosts = [...allPosts.reverse(), { postId, writer, text }];
  return async (dispatch, state) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAllPosts));
      await dispatch({ type: "UPDATE_POST", payload: { updatedAllPosts } });
      navigation.navigate("Main", {});
    } catch (err) {
      console.log(err);
    }
  };
}

function delPost(allPosts, postId) {
  const updatedAllPosts = allPosts.filter(post => post.postId !== postId).reverse();
  return async (dispatch, state) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAllPosts));
      dispatch({ type: "UPDATE_POST", payload: { updatedAllPosts } });
    } catch (err) {
      console.log(err);
    }
  };
}

function modifyPost(allPosts, postId, modifiedText, navigation) {
  const updatedAllPosts = allPosts
    .map(post => {
      if (post.postId === postId) post.text = modifiedText;
      return post;
    })
    .reverse();
  return async (dispatch, state) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAllPosts));
      dispatch({ type: "UPDATE_POST", payload: { updatedAllPosts } });
      navigation.navigate("Main", {});
    } catch (err) {
      console.log(err);
    }
  };
}

export default { getAllPosts, addPost, delPost, modifyPost };
