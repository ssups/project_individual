import React, { useEffect } from "react";
import { Text, StyleSheet, Dimensions, ScrollView, View } from "react-native";
import { Container, PostingBtnBox, PostingBtn, PostingBtnText, Wrapper } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { useHeaderHeight } from "@react-navigation/elements";
import { postAction } from "../../redux/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Main = ({ navigation, route }) => {
  const userId = useSelector(state => state.loginReducer.userId);
  const allPosts = useSelector(state => state.postReducer.allPosts);
  const dispatch = useDispatch();
  const headerHeight = useHeaderHeight();

  // AsyncStorage.clear();

  useEffect(() => {
    // 스토리지에 저장된값 최초에 가져오기
    dispatch(postAction.getAllPosts());
    // console.log("실행");
  }, []);
  console.log(allPosts);
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{ ...styles.wrapper, minHeight: screenHeight - headerHeight }}
      >
        <Text>{userId}님 환영합니다</Text>
        {allPosts &&
          allPosts?.map((post, ind) => (
            <View key={post?.postId ? post.postId : ind} style={{ borderWidth: 2 }}>
              <Text>{post?.writer}</Text>
              <Text>{post?.text}</Text>
              <Text>{post?.postId?.toString()}</Text>
            </View>
          ))}
      </ScrollView>
      <PostingBtnBox style={styles.shadow}>
        <PostingBtn
          onPress={() => {
            navigation.navigate("Posting", { id: route.params.id });
          }}
        >
          <PostingBtnText>+</PostingBtnText>
        </PostingBtn>
      </PostingBtnBox>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth - 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  shadow: {
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "black",
    shadowOpacity: 1,
  },
});

export default Main;
